import { ShowButton, List, Datagrid, TextField, EmailField, ReferenceField, FunctionField } from 'react-admin';
import styles from '../App.module.scss';
import { ListHeading } from '../common/ListHeading/ListHeading';
import { CustomPagination } from '../common/CustomPagination/CustomPagination';

export const MenteesList = () => {
  return (
    <List className={styles.list} exporter={false} pagination={<CustomPagination />}>
      <div className={styles.greet}>Hello Evano 👋🏼,</div>
      <ListHeading listName="Mentees" isButton={true} />

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
