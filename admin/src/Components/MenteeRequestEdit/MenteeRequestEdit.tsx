import { Edit, SelectInput, SimpleForm } from 'react-admin';

const MenteeRequestEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <SelectInput
          source="status"
          choices={[
            { id: 'pending', name: 'pending' },
            { id: 'inProgress', name: 'inProgress' },
            { id: 'matched', name: 'matched' },
          ]}
          optionText={'name'}
          optionValue="id"
        />
      </SimpleForm>
    </Edit>
  );
};
export default MenteeRequestEdit;
