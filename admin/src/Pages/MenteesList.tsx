import { ShowButton, List, Datagrid, TextField, EmailField, ReferenceField, FunctionField } from 'react-admin';

import styles from '../App.module.scss';

import searchIcon from '../images/icon-search.svg';

export const MenteesList = () => {
  return (
    <List className={styles.list} exporter={false}>
      <div className={styles.listHeading}>
        <div className={styles.headingText}>Mentees List</div>
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
        <TextField label="Resume" source="resume.type" />
        <TextField source="status" />
        <ShowButton />
      </Datagrid>
      <div className={styles.listFooter}>Showing data 1 to 12 of 256K entries</div>
    </List>
  );
};
