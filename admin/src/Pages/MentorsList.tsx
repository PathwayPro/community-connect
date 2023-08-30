import {
  List,
  Datagrid,
  TextField,
  EmailField,
  FunctionField,
  ShowButton,
  ReferenceField,
} from "react-admin";

export const MentorsList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <ReferenceField label="Full name" source="userId" reference="users">
          <FunctionField
            render={(record: Record<string, string>) =>
              `${record.firstName} ${record.lastName}`
            }
          />
        </ReferenceField>
        <ReferenceField label="Email" source="userId" reference="users">
          <EmailField source="email" />
        </ReferenceField>
        <TextField source="fieldOfExpertise" />
        <TextField source="yearsOfExperience" />
        <TextField source="status" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};
