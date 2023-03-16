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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ29udGFjdHNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Db250YWN0c01ldGhvZHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL0NvbnRhY3RzUHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNb25nbyIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiZXhwb3J0RGVmYXVsdCIsIkNvbnRhY3RzQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJkZWZhdWx0IiwiTWV0ZW9yIiwiY2hlY2siLCJtZXRob2RzIiwibmFtZSIsImVtYWlsIiwiaW1hZ2VVUkwiLCJTdHJpbmciLCJFcnJvciIsImluc2VydCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJjb250YWN0SWQiLCJyZW1vdmUiLCJwdWJsaXNoIiwicHVibGlzaEFsbENvbnRhY3RzIiwiZmluZCIsInN0YXJ0dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSztBQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxjQUFjLEVBQUM7RUFBQ0YsS0FBSyxDQUFDRyxDQUFDLEVBQUM7SUFBQ0gsS0FBSyxHQUFDRyxDQUFDO0VBQUE7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQTNERixNQUFNLENBQUNHLGFBQWEsQ0FFTEMsa0JBQWtCLEdBQUcsSUFBSUwsS0FBSyxDQUFDTSxVQUFVLENBQUMsVUFBVSxDQUFDLENBRjNDLEM7Ozs7Ozs7Ozs7O0FDQXpCLElBQUlELGtCQUFrQjtBQUFDSixNQUFNLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsRUFBQztFQUFDSyxPQUFPLENBQUNKLENBQUMsRUFBQztJQUFDRSxrQkFBa0IsR0FBQ0YsQ0FBQztFQUFBO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFDLElBQUlLLE1BQU07QUFBQ1AsTUFBTSxDQUFDQyxJQUFJLENBQUMsZUFBZSxFQUFDO0VBQUNNLE1BQU0sQ0FBQ0wsQ0FBQyxFQUFDO0lBQUNLLE1BQU0sR0FBQ0wsQ0FBQztFQUFBO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFDLElBQUlNLEtBQUs7QUFBQ1IsTUFBTSxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFDO0VBQUNPLEtBQUssQ0FBQ04sQ0FBQyxFQUFDO0lBQUNNLEtBQUssR0FBQ04sQ0FBQztFQUFBO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUkzTkssTUFBTSxDQUFDRSxPQUFPLENBQUM7RUFDWixpQkFBaUIsT0FBNEI7SUFBQSxJQUEzQjtNQUFFQyxJQUFJO01BQUVDLEtBQUs7TUFBRUM7SUFBUyxDQUFDO0lBQ3RDSixLQUFLLENBQUNFLElBQUksRUFBRUcsTUFBTSxDQUFDO0lBQ25CTCxLQUFLLENBQUNHLEtBQUssRUFBRUUsTUFBTSxDQUFDO0lBQ3BCTCxLQUFLLENBQUNJLFFBQVEsRUFBRUMsTUFBTSxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0gsSUFBSSxFQUFFO01BQ1AsTUFBTSxJQUFJSCxNQUFNLENBQUNPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QztJQUNBLE9BQU9WLGtCQUFrQixDQUFDVyxNQUFNLENBQUM7TUFBRUwsSUFBSTtNQUFFQyxLQUFLO01BQUVDLFFBQVE7TUFBRUksU0FBUyxFQUFFLElBQUlDLElBQUk7SUFBRyxDQUFDLENBQUM7RUFDdEYsQ0FBQztFQUNELGlCQUFpQixRQUFhO0lBQUEsSUFBWjtNQUFDQztJQUFTLENBQUM7SUFDekJWLEtBQUssQ0FBQ1UsU0FBUyxFQUFFTCxNQUFNLENBQUM7SUFDeEJULGtCQUFrQixDQUFDZSxNQUFNLENBQUNELFNBQVMsQ0FBQztFQUN4QztBQUNKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ2xCRixJQUFJZCxrQkFBa0I7QUFBQ0osTUFBTSxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLEVBQUM7RUFBQ0ssT0FBTyxDQUFDSixDQUFDLEVBQUM7SUFBQ0Usa0JBQWtCLEdBQUNGLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFBQyxJQUFJSyxNQUFNO0FBQUNQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBQztFQUFDTSxNQUFNLENBQUNMLENBQUMsRUFBQztJQUFDSyxNQUFNLEdBQUNMLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFHL0pLLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTQyxrQkFBa0IsR0FBRztFQUN4RCxPQUFPakIsa0JBQWtCLENBQUNrQixJQUFJLEVBQUU7QUFDcEMsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDTEYsSUFBSWYsTUFBTTtBQUFDUCxNQUFNLENBQUNDLElBQUksQ0FBQyxlQUFlLEVBQUM7RUFBQ00sTUFBTSxDQUFDTCxDQUFDLEVBQUM7SUFBQ0ssTUFBTSxHQUFDTCxDQUFDO0VBQUE7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQUNGLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO0FBS2pOTSxNQUFNLENBQUNnQixPQUFPLENBQUMsTUFBTSxDQUVyQixDQUFDLENBQUMsQyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0c0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY29udGFjdHMnKTsiLCJpbXBvcnQgQ29udGFjdHNDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RzQ29sbGVjdGlvblwiO1xuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgICdjb250YWN0cy5pbnNlcnQnKHsgbmFtZSwgZW1haWwsIGltYWdlVVJMIH0pIHtcbiAgICAgICAgY2hlY2sobmFtZSwgU3RyaW5nKTtcbiAgICAgICAgY2hlY2soZW1haWwsIFN0cmluZyk7XG4gICAgICAgIGNoZWNrKGltYWdlVVJMLCBTdHJpbmcpO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJOYW1lIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb250YWN0c0NvbGxlY3Rpb24uaW5zZXJ0KHsgbmFtZSwgZW1haWwsIGltYWdlVVJMLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkgfSk7XG4gICAgfSxcbiAgICAnY29udGFjdHMucmVtb3ZlJyh7Y29udGFjdElkfSl7XG4gICAgICAgIGNoZWNrKGNvbnRhY3RJZCwgU3RyaW5nKTtcbiAgICAgICAgQ29udGFjdHNDb2xsZWN0aW9uLnJlbW92ZShjb250YWN0SWQpOyAgICAgICAgXG4gICAgfVxufSlcblxuIiwiaW1wb3J0IENvbnRhY3RzQ29sbGVjdGlvbiBmcm9tIFwiLi9Db250YWN0c0NvbGxlY3Rpb25cIlxuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSBcIm1ldGVvci9tZXRlb3JcIjtcblxuTWV0ZW9yLnB1Ymxpc2goJ2FsbENvbnRhY3RzJywgZnVuY3Rpb24gcHVibGlzaEFsbENvbnRhY3RzKCkge1xuICAgIHJldHVybiBDb250YWN0c0NvbGxlY3Rpb24uZmluZCgpO1xufSkiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0NvbnRhY3RzQ29sbGVjdGlvblwiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvQ29udGFjdHNNZXRob2RzXCI7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9Db250YWN0c1B1YmxpY2F0aW9uc1wiXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblxufSk7XG4iXX0=
