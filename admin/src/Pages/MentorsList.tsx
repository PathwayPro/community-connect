import { List, Datagrid, TextField, EmailField, FunctionField, ShowButton, ReferenceField } from 'react-admin';

import styles from '../App.module.scss';
import { ListHeading } from '../common/ListHeading/ListHeading';
import { CustomPagination } from '../common/CustomPagination/CustomPagination';

import eyeArrowRightOutline from '../images/eye-arrow-right-outline.svg';

export const MentorsList = () => {
  return (
    <>
      <List className={styles.list} exporter={false} pagination={<CustomPagination />}>
        <div className={styles.greet}>Hello Evano 👋🏼,</div>
        <ListHeading listName="Mentors" />

        <Datagrid rowClick="show" bulkActionButtons={false} className={styles.listRow}>
          {/* Your Datagrid fields here */}
          <ReferenceField label="Full name" source="userId" reference="users">
            <FunctionField render={(record: Record<string, string>) => `${record.firstName} ${record.lastName}`} />
          </ReferenceField>
          <ReferenceField label="Email" source="userId" reference="users">
            <EmailField source="email" />
          </ReferenceField>
          <TextField source="fieldOfExpertise" />
          <TextField source="yearsOfExperience" />
          <TextField source="status" />
          {/* <ShowButton /> */}
          <ShowButton label="" />
        </Datagrid>
        <div className={styles.listFooter}>Showing data 1 to 12 of 256K entries</div>
      </List>
    </>
  );
};
