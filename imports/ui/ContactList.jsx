import React, { memo } from "react";
import ContactsCollection from "../api/ContactsCollection";
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ArchiveIcon from '@mui/icons-material/Archive';


export const ContactList = () => {
    const isLoading = useSubscribe('contacts');
    const contacts = useFind(() => ContactsCollection.find({ archived: { $ne: true }}, { sort: { createdAt: -1 } }));


    const archiveContact = (event, _id) => {
        event.preventDefault();
        console.log("entra a archive");
        Meteor.call('contacts.archive', { contactId: _id });
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
                secondary={<>
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body3"
                        color="text.primary"
                    >
                        {contact.email}
                    </Typography>
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body3"
                        color="text.primary"
                    >
                        {contact.walletId}
                    </Typography>
                    <IconButton aria-label="delete" onClick={(event) => archiveContact(event, contact._id)}>
                        {/*<DeleteIcon />*/}
                        <ArchiveIcon />
                        {/*<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} >Archive</BottomNavigationAction>*/}
                    </IconButton>
                </>}
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
