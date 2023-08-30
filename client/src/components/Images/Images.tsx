import classNames from 'classnames';
import { useEffect, useState, useRef, FC } from 'react';

import { useUploadImageMutation } from '../../app/slices/apiSlice';
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
