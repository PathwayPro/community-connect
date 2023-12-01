import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  ShowButton,
  ReferenceField,
  Pagination,
} from 'react-admin';

import styles from '../App.module.scss';
import { ListHeading } from '../common/ListHeading/ListHeading';

interface CustomPaginationProps {
  page: number;
  perPage: number;
  setPage?: () => void;
  setPerPage?: () => void;
  total: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ page, perPage, total, ...rest }) => {
  const totalPages = Math.ceil(total / perPage) || 1;

  return <Pagination rowsPerPageOptions={[11]} page={page} count={totalPages} {...rest} />;
};

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
          <ShowButton />
        </Datagrid>
        <div className={styles.listFooter}>Showing data 1 to 12 of 256K entries</div>
      </List>
    </>
  );
};
