import { Edit, SelectInput, SimpleForm } from 'react-admin';

const MentorRequestEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <SelectInput
          source="status"
          choices={[
            { id: 'pending', name: 'pending' },
            { id: 'approved', name: 'approved' },
            { id: 'rejected', name: 'rejected' },
          ]}
          optionText={'name'}
          optionValue="id"
        />
      </SimpleForm>
    </Edit>
  );
};
export default MentorRequestEdit;
