import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import Header from './Header';


export const App = () => (
  <>
  
    <div>
      <div>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </>
);



