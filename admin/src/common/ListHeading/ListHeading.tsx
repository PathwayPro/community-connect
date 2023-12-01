import React from 'react';
import styles from './ListHeading.module.scss';

import searchIcon from '../../images/icon-search.svg';

interface ListHeadingProps {
  listName: string;
  isButton?: boolean;
}

export const ListHeading: React.FC<ListHeadingProps> = ({ listName, isButton = false }) => {
  return (
    <div className={styles.listHeading}>
      <div className={styles.headingText}>{listName} List</div>
      <form className={styles.form}>
        <label htmlFor="searchInput" className={styles.formInputWrapper}>
          <img src={searchIcon} alt="Search Icon" />
          <input id="searchInput" className={styles.formInput} placeholder="Search" />
        </label>
        {isButton && <button className={styles.button}>History</button>}
      </form>
    </div>
  );
};
