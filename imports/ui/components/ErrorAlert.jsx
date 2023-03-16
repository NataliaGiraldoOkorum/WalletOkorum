import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default ErrorAlert = ({ message }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <strong> { message } </strong>
      </Alert>
    </Stack>
  );
}