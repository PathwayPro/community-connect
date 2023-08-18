import { useState, useRef, FC } from 'react';

import Alert from '../../../common/components/Alert/Alert';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

import styles from './Images.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.svg';

interface ImagesProps {
  myProfile: boolean;
}

const Images: FC<ImagesProps> = ({ myProfile }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        if (Math.abs(aspectRatio - 28 / 9) <= 0.1) {
          setSelectedFile(file);
        } else {
          setAlertOpen(true);
        }
      };
    }
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  const isProfileImageAvailable = false;
  const source = !isProfileImageAvailable ? defaultProfileImage : '';

  return (
    <div className={styles.container}>
      {selectedFile && <img className={styles.backgroundImage} src={URL.createObjectURL(selectedFile)} />}

      <img className={styles.profileImage} src={source} alt="Your Image" />

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
        title="Image Aspect Ratio Error!"
        content="Please choose an image that is 1320 x 250  pixels."
      />
    </div>
  );
};

export default Images;
