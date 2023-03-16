var require = meteorInstall({"imports":{"api":{"ContactsCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// imports/api/ContactsCollection.js                                         //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }
}, 0);
module.exportDefault(ContactsCollection = new Mongo.Collection('contacts'));
///////////////////////////////////////////////////////////////////////////////

},"ContactsMethods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// imports/api/ContactsMethods.js                                            //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
let ContactsCollection;
module.link("./ContactsCollection", {
  default(v) {
    ContactsCollection = v;
  }
}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }
}, 2);
let ImportContactsRounded;
module.link("@mui/icons-material", {
  ImportContactsRounded(v) {
    ImportContactsRounded = v;
  }
}, 3);
Meteor.methods({
  'contacts.insert'(_ref) {
    let {
      name,
      email,
      imageURL
    } = _ref;
    check(name, String);
    check(email, String);
    check(imageURL, String);
    if (!name) {
      throw new Meteor.Error("Name is required");
    }
    return ContactsCollection.insert({
      name,
      email,
      imageURL,
      createdAt: new Date()
    });
  },
  'contacts.remove'(_ref2) {
    let {
      contactId
    } = _ref2;
    check(contactId, String);
    ContactsCollection.remove(contactId);
  },
  'contacts.archive'(_ref3) {
    let {
      contactId
    } = _ref3;
    check(contactId, String);
    ContactsCollection.update({
      _id: contactId
    }, {
      $set: {
        archived: true
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////////

},"ContactsPublications.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// imports/api/ContactsPublications.js                                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
let ContactsCollection;
module.link("./ContactsCollection", {
  default(v) {
    ContactsCollection = v;
  }
}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 1);
Meteor.publish('allContacts', function publishAllContacts() {
  return ContactsCollection.find();
});
Meteor.publish('contacts', function publishAllContacts() {
  return ContactsCollection.find({
    archived: {
      $ne: true
    }
  });
});
///////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// server/main.js                                                            //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 0);
module.link("../imports/api/ContactsCollection");
module.link("../imports/api/ContactsMethods");
module.link("../imports/api/ContactsPublications");
Meteor.startup(() => {});
///////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts",
    ".jsx",
    ".mjs"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ29udGFjdHNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Db250YWN0c01ldGhvZHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL0NvbnRhY3RzUHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNb25nbyIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiZXhwb3J0RGVmYXVsdCIsIkNvbnRhY3RzQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJkZWZhdWx0IiwiTWV0ZW9yIiwiY2hlY2siLCJJbXBvcnRDb250YWN0c1JvdW5kZWQiLCJtZXRob2RzIiwibmFtZSIsImVtYWlsIiwiaW1hZ2VVUkwiLCJTdHJpbmciLCJFcnJvciIsImluc2VydCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJjb250YWN0SWQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJfaWQiLCIkc2V0IiwiYXJjaGl2ZWQiLCJwdWJsaXNoIiwicHVibGlzaEFsbENvbnRhY3RzIiwiZmluZCIsIiRuZSIsInN0YXJ0dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSztBQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxjQUFjLEVBQUM7RUFBQ0YsS0FBSyxDQUFDRyxDQUFDLEVBQUM7SUFBQ0gsS0FBSyxHQUFDRyxDQUFDO0VBQUE7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQTNERixNQUFNLENBQUNHLGFBQWEsQ0FFTEMsa0JBQWtCLEdBQUcsSUFBSUwsS0FBSyxDQUFDTSxVQUFVLENBQUMsVUFBVSxDQUFDLENBRjNDLEM7Ozs7Ozs7Ozs7O0FDQXpCLElBQUlELGtCQUFrQjtBQUFDSixNQUFNLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsRUFBQztFQUFDSyxPQUFPLENBQUNKLENBQUMsRUFBQztJQUFDRSxrQkFBa0IsR0FBQ0YsQ0FB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QUFDQyxJQUFJLENBQUMsZUFBZSxFQUFDO0VBQUNNLE1BQU0sQ0FBQ0wsQ0FBQyxFQUFDO0lBQUNLLE1BQU0sR0FBQ0wsQ0FBQztFQUFBO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFDRixNQUFNLENBQUNDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztBQUFDRCxNQUFNLENBQUNDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztBQUFDRCxNQUFNLENBQUNDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztBQUtqTk0sTUFBTSxDQUFDc0IsT0FBTyxDQUFDLE1BQU0sQ0FFckIsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNDb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2NvbnRhY3RzJyk7IiwiaW1wb3J0IENvbnRhY3RzQ29sbGVjdGlvbiBmcm9tIFwiLi9Db250YWN0c0NvbGxlY3Rpb25cIjtcbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuaW1wb3J0IHsgSW1wb3J0Q29udGFjdHNSb3VuZGVkIH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAgJ2NvbnRhY3RzLmluc2VydCcoeyBuYW1lLCBlbWFpbCwgaW1hZ2VVUkwgfSkge1xuICAgICAgICBjaGVjayhuYW1lLCBTdHJpbmcpO1xuICAgICAgICBjaGVjayhlbWFpbCwgU3RyaW5nKTtcbiAgICAgICAgY2hlY2soaW1hZ2VVUkwsIFN0cmluZyk7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcIk5hbWUgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbnRhY3RzQ29sbGVjdGlvbi5pbnNlcnQoeyBuYW1lLCBlbWFpbCwgaW1hZ2VVUkwsIGNyZWF0ZWRBdDogbmV3IERhdGUoKSB9KTtcbiAgICB9LFxuICAgICdjb250YWN0cy5yZW1vdmUnKHtjb250YWN0SWR9KXtcbiAgICAgICAgY2hlY2soY29udGFjdElkLCBTdHJpbmcpO1xuICAgICAgICBDb250YWN0c0NvbGxlY3Rpb24ucmVtb3ZlKGNvbnRhY3RJZCk7ICAgICAgICBcbiAgICB9LFxuICAgICdjb250YWN0cy5hcmNoaXZlJyh7IGNvbnRhY3RJZCB9KXtcbiAgICAgICAgY2hlY2soY29udGFjdElkLCBTdHJpbmcgKTtcbiAgICAgICAgQ29udGFjdHNDb2xsZWN0aW9uLnVwZGF0ZSh7IF9pZDogY29udGFjdElkfSwgeyRzZXQ6IHsgYXJjaGl2ZWQ6IHRydWV9fSk7XG4gICAgfVxufSlcblxuIiwiaW1wb3J0IENvbnRhY3RzQ29sbGVjdGlvbiBmcm9tIFwiLi9Db250YWN0c0NvbGxlY3Rpb25cIlxuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcblxuTWV0ZW9yLnB1Ymxpc2goJ2FsbENvbnRhY3RzJywgZnVuY3Rpb24gcHVibGlzaEFsbENvbnRhY3RzKCkge1xuICAgIHJldHVybiBDb250YWN0c0NvbGxlY3Rpb24uZmluZCgpO1xufSkgXG5cbk1ldGVvci5wdWJsaXNoKCdjb250YWN0cycsIGZ1bmN0aW9uIHB1Ymxpc2hBbGxDb250YWN0cygpIHtcbiAgICByZXR1cm4gQ29udGFjdHNDb2xsZWN0aW9uLmZpbmQoeyBhcmNoaXZlZDogeyAkbmU6IHRydWUgfX0pO1xufSkgIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9Db250YWN0c0NvbGxlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0NvbnRhY3RzTWV0aG9kc1wiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvQ29udGFjdHNQdWJsaWNhdGlvbnNcIlxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG5cbn0pO1xuIl19
