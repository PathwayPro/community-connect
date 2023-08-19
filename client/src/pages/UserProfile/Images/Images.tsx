import classNames from 'classnames';
import { useState, useRef, FC } from 'react';

import Alert from '../../../common/components/Alert/Alert';
import Avatar from '../../../common/components/Avatar/Avatar';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

import styles from './Images.module.scss';

// import defaultProfileImage from '../../../images/defaultProfileImg.svg';

const Images: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [imageClassName, setImageClassName] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
        } else {
          setImageClassName('cover');
        }
      };
    }
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  // const isProfileImageAvailable = false;
  // const source = !isProfileImageAvailable ? defaultProfileImage : '';

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

      {/* <img className={styles.profileImage} src={source} alt="Your Image" /> */}

      <Avatar size="big" className={styles.profileImage} />

      <IconSVG name={'editIcon'} className={styles.editIcon} onClick={handleButtonClick} />

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
        title="Image Aspect Ratio Error!"
        content="Please choose an image that is 1320 x 250  pixels."
      />
    </div>
  );
};

export default Images;
