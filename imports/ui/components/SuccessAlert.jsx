import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

export default SuccessAlerts = ({ message }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
     <Alert severity="success">
          <strong> { message } </strong>
      </Alert>
    </Stack>
  );
}