import { FC } from 'react';

import VectorEditBtn from '../../../common/components/Vector/VectorEditBtn';

import styles from './Images.module.scss';

import defaultProfileImage from '../../../images/Main/defaultProfileImg.png';

const Images: FC = () => {
  const openModal = () => console.log('click');

  const isBGImageAvailable = true;
  const isProfileImageAvailable = false;
  const source = !isProfileImageAvailable
    ? defaultProfileImage
    : '';

  return (
    <div className={styles.container}>
        {isBGImageAvailable && (
        <img
          className={styles.backgroundImage}
          src='https://cutewallpaper.org/21x/w02yrwp96/Colorful-Flowers-cover-covers-for-Facebook-pages-Flower-.jpg'
        />
      )}
      <img className={styles.image} src={source} alt="Your Image" />
      <VectorEditBtn
        position={'bottom'}
        onClick={openModal}
      />
    </div>
  );
};

export default Images;
