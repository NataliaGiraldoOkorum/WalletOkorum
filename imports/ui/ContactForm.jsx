import React, { useState } from 'react';
import ContactsCollection from "../api/ContactsCollection";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");


  const saveContact = () => {
    console.log({ name, email, imageURL });
    ContactsCollection.insert({ name, email, imageURL })
    setName("");
    setEmail("");
    setImageURL("");
  }

  return (
    <form>
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
        <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
  )
}