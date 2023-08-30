import { ShowButton, List, Datagrid, TextField, EmailField, ReferenceField, FunctionField } from 'react-admin';

export const MenteesList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
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
    </List>
  );
};
