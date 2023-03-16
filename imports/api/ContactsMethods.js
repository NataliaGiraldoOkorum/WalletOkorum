import ContactsCollection from "./ContactsCollection";
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
   'contacts.insert'({ name, email, imageURL }) {
        check(name, String);
        check(email, String);
        check(imageURL, String);
        if (!name) {
            throw new Meteor.Error("Name is required");
        }
        return ContactsCollection.insert({ name, email, imageURL, createdAt: new Date() });
    },
    'contacts.remove'({contactId}){
        check(contactId, String);
        ContactsCollection.remove(contactId);        
    }
})

