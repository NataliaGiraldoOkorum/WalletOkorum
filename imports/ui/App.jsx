import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';



export const App = () => (
  <>
  
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </>
);



