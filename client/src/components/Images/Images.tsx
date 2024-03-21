import classNames from 'classnames';
import { useState, useRef, useEffect, FC } from 'react';

import Alert from '../../common/components/Alert/Alert';
import Avatar from '../../common/components/Avatar/Avatar';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';

import styles from './Images.module.scss';

interface ImagesProps {
  myProfile: boolean;
}

const Images: FC<ImagesProps> = ({ myProfile }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [imageClassName, setImageClassName] = useState('');
  const [avatarSize, setAvatarSize] = useState<'small' | 'medium' | 'big' | 'regular'>('big');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    return screenWidth <= 1200 ? 'regular' : 'big';
  };

  useEffect(() => {
    const handleResize = () => {
      const screenSize = checkScreenSize();
      const validSizes = ['big', 'medium', 'small', 'regular'];
      if (validSizes.includes(screenSize)) {
        setAvatarSize(screenSize);
      } else {
        setAvatarSize('big');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width / img.height < 1) {
          setImageClassName('contain');
          setAlertOpen(true);
        } else {
          setImageClassName('cover');
        }
      };
    }
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div className={styles.container}>
      {selectedFile && (
        <div
          className={classNames(styles.backgroundImage, styles[imageClassName])}
          style={{ backgroundImage: `url(${URL.createObjectURL(selectedFile)})` }}
        >
          <img className={styles.hidden} src={URL.createObjectURL(selectedFile)} />
        </div>
      )}

      <Avatar size={avatarSize} borderColor="white" className={styles.profileImage} />

      {myProfile && <IconSVG name={'editIcon'} className={styles.editIcon} onClick={handleButtonClick} />}

      <input
        className={styles.imageInput}
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
      />
      <Alert
        isOpen={alertOpen}
        onClose={closeAlert}
        title="Image Aspect Ratio Suggestion"
        content="Please choose an image that is rectangular"
      />
    </div>
  );
};

export default Images;
