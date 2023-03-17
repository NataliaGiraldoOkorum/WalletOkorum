import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import  Wallet from './Wallet';
import Modal from './components/ModalAlert';
import OutlinedCard from './Wallet'


export const App = () => (
  <>
  
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div>
        <Wallet />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </>
);



