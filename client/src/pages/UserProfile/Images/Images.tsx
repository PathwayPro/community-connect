import classNames from 'classnames';
import { useEffect, useState, useRef, FC } from 'react';

import { useUploadImageMutation } from '../../../app/slices/apiSlice';
import Alert from '../../../common/components/Alert/Alert';
import IconSVG from '../../../common/components/IconSVG/IconSVG';

import styles from './Images.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

const Images: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadImage] = useUploadImageMutation();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      await uploadImage(formData)
        .unwrap()
        .then((data) => {
          console.log('File uploaded successfully!', data);
        })
        .catch((err) => {
          console.error('Error uploading file:', err);
        });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const tolerance = 1; //tolerance for aspect ratio

        const isImgInRange = 1 <= tolerance;
        // const isImgInRange = Math.abs(img.width/img.height - 1320/250) <= tolerance;
        if (isImgInRange) {
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
