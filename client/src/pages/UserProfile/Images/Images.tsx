import axios from 'axios';
import classNames from 'classnames';
import { useState, useRef, FC } from 'react';

import Alert from '../../../common/components/Alert/Alert';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

import styles from './Images.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

const Images: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('/upload', formData);
        console.log('File uploaded successfully!', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const tolerance = 1; //tolerance for aspect ratio

        const isImgInRange = Math.abs(img.width/img.height - 1320/250) <= tolerance;
        if (isImgInRange) {
          setSelectedFile(file);
          handleUpload();
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
      {selectedFile && (
        <div
          className={classNames(styles.backgroundImage)}
          style={{ backgroundImage: `url(${URL.createObjectURL(selectedFile)})` }}
        >
          <img className={styles.hidden} src={URL.createObjectURL(selectedFile)} />
        </div>
      )}

      <img className={styles.profileImage} src={source} alt="Your Image" />

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
