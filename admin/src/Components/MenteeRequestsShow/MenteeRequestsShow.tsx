import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  EmailField,
  useRecordContext, FunctionField,
} from 'react-admin';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Grid, Select, MenuItem, Typography, Button, Box, SelectChangeEvent, } from '@mui/material';
import IconBack from '../../images/icon-back.svg';

import './styles.scss';

const MenteeRequestShow = () => {
  const navigate = useNavigate();
  const record = useRecordContext();
  const [status, setStatus] = useState<string>('pending');

  const title = record ? `${record.firstName} ${record.lastName} Application` : 'Mentorship Details';

  const handleBack = () => {
    navigate('/mentorship/mentees');
  };
  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  return (
    <Show title={title}>
      <Button
        startIcon={<img src={IconBack} alt=""/>}
        onClick={handleBack}
        className="backButton"
      >
        <Typography style={{fontSize: '14px', fontWeight: '500', textTransform: 'none', color: '#B6BCBC'}} variant="body1">Back to the list</Typography>
      </Button>
      <SimpleShowLayout>
        <Card>
          <CardContent style={{backgroundColor: '#EBEDF3', borderRadius: '30px'}}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ReferenceField label="Full name" source="userId" reference="users">
                  <FunctionField style={{fontSize: '20px', fontWeight: '600'}} render={(record: Record<string, string>) => `${record.firstName} ${record.lastName} Application`} />
                </ReferenceField>
              </Grid>

              <Grid item xs={6}>
                <Box display="flex" alignItems="center" justifyContent="flex-end" className="statusSection">
                  <Select
                    labelId="status-select-label"
                    id="status-select"
                    value={status}
                    onChange={handleStatusChange}
                    style={{backgroundColor: '#FCBC5C', color: '#000000', border: 'none', borderRadius: '8px'}}
                  >
                    <MenuItem value="inProgress">In progress</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="matched">Matched</MenuItem>
                  </Select>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" alignItems="center" className="infoSection">
                  <Typography className="title">Email:</Typography>
                  <ReferenceField label="Email" source="userId" reference="users">
                    <EmailField source="email" className="emailField" />
                  </ReferenceField>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" alignItems="center" className="infoSection">
                  <Typography className="title">Field of expertise:</Typography>
                  <ReferenceField label="Field of expertise" source="userId" reference="users">
                    <TextField source="fieldOfExpertise" />
                  </ReferenceField>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" alignItems="center" className="infoSection">
                  <Typography className="title">Years of experience:</Typography>
                  <ReferenceField label="Years of experience" source="userId" reference="users">
                    <TextField source="yearsOfExperience" />
                  </ReferenceField>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box className="messageBox">
                  <Typography className="title">Why you want a mentor?</Typography>
                  <TextField source="message" className="messageField" />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box>
                  <Button
                    onClick={handleBack}
                  >
                    <Typography style={{fontWeight: '700', textTransform: 'none'}} className="applicantBtn" variant="body1">Resume</Typography>
                  </Button>
                  <Button
                    onClick={handleBack}
                  >
                    <Typography style={{fontWeight: '700', textTransform: 'none'}} className="applicantBtn" variant="body1">Message</Typography>
                  </Button>
                  <Button
                    onClick={handleBack}
                  >
                    <Typography style={{fontWeight: '700', textTransform: 'none'}} className="applicantBtn" variant="body1">User Profile</Typography>
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Typography style={{fontSize: '22px', fontWeight: '600'}} variant="subtitle1" component="div">
                  Mentor
                </Typography>
                <Typography variant="body2">
                  The mentor is not assigned/matched yet.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </SimpleShowLayout>
    </Show>
  );
};

export default MenteeRequestShow;
