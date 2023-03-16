import React, { useState } from 'react';
//import ContactsCollection from "../api/ContactsCollection";
//import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { Meteor } from 'meteor/meteor'
import ErrorAlert from './components/ErrorAlert';
import SuccessAlert from './components/SuccessAlert';
import Button from '@mui/material/Button';

export const ContactForm = () => {     
  const [name, setName] = useState("");  //formik
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
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
    //console.log({ name, email, imageURL });
    //ContactsCollection.insert({ name, email, imageURL })
    Meteor.call('contacts.insert', { name, email, imageURL }, (errorResponse) => {
      if (errorResponse) {
        showError({ message: errorResponse.error })
      } else {
        setName("");
        setEmail("");
        setImageURL("");
        showSuccess({ message: "contact save" })

      }
    });

  }

  return (
    <form>
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}

      <div>
        <label htmlFor="name">
          Name
        </label>
        <input id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email" />
      </div>
      <div>
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          id="imageURL" />
      </div>
      <div>
      <Button variant="contained" onClick={saveContact}>Save Contact</Button>
      </div>
    </form>
  )
}