import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor'
import ErrorAlert from './components/ErrorAlert';
import SuccessAlert from './components/SuccessAlert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const ContactForm = () => {     
  const [name, setName] = React.useState("");  //formik
  const [email, setEmail] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [walletId, setWalletId] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError("")
    }, 5000);
  }

  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess("")
    }, 5000);
  }

  const saveContact = () => {
    Meteor.call('contacts.insert', { name, email, imageURL, walletId }, (errorResponse) => {
      if (errorResponse) {
        showError({ message: errorResponse.error })
      } else {
        setName("");
        setEmail("");
        setImageURL("");
        setWalletId("");
        showSuccess({ message: "contact save" })
      }
    });
  }

  return (
    <>
      <br/>
      <form>
        {error && <ErrorAlert message={error} />}
        {success && <SuccessAlert message={success} />}
        <Grid container spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="name" label="Name" variant="standard" value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" />
          </Box>    
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="email" label="Email" variant="standard" type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="walletID"label="Wallet ID" variant="standard" type="text"
              value={walletId}
              onChange={(e) => setWalletId(e.target.value)}
              />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="imageURL" label="ImageURL" variant="standard"   type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              />
          </Box>    
        </Grid> 
          <br/>
          <br/>

          <Button variant="contained" onClick={saveContact}>Save Contact</Button>
      </form>
    </>
  )
}