import ContactsCollection from "./ContactsCollection";
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ImportContactsRounded } from "@mui/icons-material";

Meteor.methods({
   'contacts.insert'({ name, email, imageURL, walletId }) {
        check(name, String);
        check(email, String);
        check(imageURL, String);
        check(walletId, String);

        if (!name) {
            throw new Meteor.Error("Name is required");
        }
        if (!walletId) {
            throw new Meteor.Error("Wallet ID is required");
        }
        return ContactsCollection.insert({ 
            name, 
            email, 
            imageURL, 
            walletId, 
            createdAt: new Date() 
        });
    },
    'contacts.remove'({contactId}){
        check(contactId, String);
        ContactsCollection.remove(contactId);        
    },
    'contacts.archive'({ contactId }){
        check(contactId, String );
        ContactsCollection.update({ _id: contactId}, {$set: { archived: true}});
    }
})

