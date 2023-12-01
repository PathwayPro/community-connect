import { List, Datagrid, TextField, EmailField, FunctionField, ShowButton, ReferenceField } from 'react-admin';

import styles from '../App.module.scss';

import searchIcon from '../images/icon-search.svg';

export const MentorsList = () => {
  return (
    <List className={styles.list} exporter={false}>
      <div className={styles.listHeading}>
        <div className={styles.headingText}>Mentors List</div>
        <form className={styles.form}>
          <label htmlFor="searchInput" className={styles.formInputWrapper}>
            <img src={searchIcon} alt="Search Icon" />
            <input id="searchInput" className={styles.formInput} placeholder="Search" />
          </label>
          <button className={styles.button}>History</button>
        </form>
      </div>
      <Datagrid rowClick="show" bulkActionButtons={false} className={styles.listRow}>
        <ReferenceField label="Full name" source="userId" reference="users">
          <FunctionField render={(record: Record<string, string>) => `${record.firstName} ${record.lastName}`} />
        </ReferenceField>
        <ReferenceField label="Email" source="userId" reference="users">
          <EmailField source="email" />
        </ReferenceField>
        <TextField source="fieldOfExpertise" />
        <TextField source="yearsOfExperience" />
        <TextField source="status" />
        <ShowButton />
      </Datagrid>
      <div className={styles.listFooter}>Showing data 1 to 12 of 256K entries</div>
    </List>
  );
};
