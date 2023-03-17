import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export const ModalAlert = ({ open, setOpen, title, body, footer, errorMessage }) => {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">{title}</h2>
          <div>{errorMessage && (
            <Alert severity="error">
              <strong> {errorMessage} </strong>
            </Alert>
          )}
            <p id="parent-modal-description">
              {body}
            </p>
          </div>
          <CardActions enableSpacing>
            <p id="parent-modal-description">
              {footer}
            </p>
            <hr/>
            <Button
                variant='contained'
                size="small"
                onClick={handleClose}
              >
                Close
              </Button>
          </CardActions>
        </Box>

      </Modal>
    </div>
  );
}