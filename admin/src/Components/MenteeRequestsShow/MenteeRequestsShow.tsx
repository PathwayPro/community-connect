import { Show, SimpleShowLayout, TextField, DateField, ReferenceField, FunctionField, EmailField } from 'react-admin';
import { Stack, Grid, Typography } from '@mui/material';

import './styles.scss';

const MenteeRequestShow = () => {
  return (
    <Show title={'Mentorship Details'}>
      <SimpleShowLayout>
        <Grid container spacing={2} sx={{ margin: 2 }}>
          <Grid item xs={6} sm={8}>
            <ReferenceField label={false} source="userId" reference="users">
              <FunctionField
                render={(record: Record<string, string>) => `${record.firstName} ${record.lastName}`}
                sx={{ fontSize: '22px', fontWeight: 600 }}
              />
            </ReferenceField>
          </Grid>

          <Grid item xs={6} sm={4}>
            <TextField source="status" className="statusButton" />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography className="title">Email:</Typography>
              <ReferenceField label="Email" source="userId" reference="users">
                <EmailField source="email" />
              </ReferenceField>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography className="title">Message:</Typography>
              <TextField source="message" />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography className="title">Created:</Typography>
              <DateField source="createdAt" />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography className="title">Updated:</Typography>
              <DateField source="updatedAt" />
            </Stack>
          </Grid>
        </Grid>
      </SimpleShowLayout>
    </Show>
  );
};

export default MenteeRequestShow;
