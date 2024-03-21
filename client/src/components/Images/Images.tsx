import { useState, useEffect, useRef, FC } from 'react';

import Alert from '../../common/components/Alert/Alert';
import IconSVG from '../../common/components/IconSVG/Button/IconSVG';

import styles from './Images.module.scss';

import Avatar from '../../common/components/Avatar/Avatar';
import { useUploadImageMutation } from '../../app/slices/apiSlice';



interface ImagesProps {
  myProfile: boolean;
}

const Images: FC<ImagesProps> = ({ myProfile }) => {
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
        .then((data: any) => {
          console.log('File uploaded successfully!', data);
        })
        .catch((err: any) => {
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

  return (
    <div className={styles.container}>
      {selectedFile && <img className={styles.backgroundImage} src={URL.createObjectURL(selectedFile)} />}

      <Avatar size="big" borderColor="white" className={styles.profileImage} />

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
