import React, { memo } from "react";
import ContactsCollection from "../api/ContactsCollection";
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';




export const ContactList = () => {
    const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() => ContactsCollection.find({}, { sort: { createdAt: -1 } }));

    // const contacts = useTracker(() => {
    //     return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch(); //Tracker 
    // });

    const removeContact = (event, _id) => {
        event.preventDefault();
        Meteor.call('contacts.remove', { contactId: _id });
    }


    if (isLoading()) {
        return (
        <div>
            <h3>Loading...</h3>
        </div>
        )
    }

    const ContactItem = memo(({ contact }) => {
        return (
            <Box sx={{
              width: 250,
              height: 90,
              p: 2, border: '1px dashed grey',
              '&:hover': {
                opacity: [0.5, 0.5, 0.5],
                 
              },
            }}
          >
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="" src={contact.imageURL} />
            </ListItemAvatar>
            <ListItemText
                primary={contact.name}
                secondary={<React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body3"
                        color="text.primary"
                    >
                        {contact.email}
                    </Typography>
                    <IconButton aria-label="delete" onClick={(event) => removeContact(event, contact._id)}>
                        <DeleteIcon />

                    </IconButton>
                </React.Fragment>}
            ></ListItemText>
        </ListItem>
        </Box >
        )
    });

return (
    <div>
        <h3>Contact List</h3>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {contacts.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
            ))}
        </List>
    </div>
)
}

            // <>
        //     <h3>Contact List</h3>
        //     {contacts.map(contact => (
        //         <li key ={contact.email}>{contact.name} - {contact.email}</li>
        //     ))}
        // </>