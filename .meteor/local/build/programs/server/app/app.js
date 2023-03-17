var require = meteorInstall({"imports":{"api":{"ContactsCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/ContactsCollection.js                                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }
}, 0);
module.exportDefault(ContactsCollection = new Mongo.Collection('contacts'));
///////////////////////////////////////////////////////////////////////////////////////

},"ContactsMethods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/ContactsMethods.js                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
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
      imageURL,
      walletId
    } = _ref;
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
///////////////////////////////////////////////////////////////////////////////////////

},"ContactsPublications.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/ContactsPublications.js                                               //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////

},"TransactionsCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/TransactionsCollection.js                                             //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }
}, 0);
module.exportDefault(TransactionsCollection = new Mongo.Collection('transactions'));
///////////////////////////////////////////////////////////////////////////////////////

},"WalletsCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/WalletsCollection.js                                                  //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }
}, 0);
module.exportDefault(WalletsCollection = new Mongo.Collection('wallets'));
///////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// server/main.js                                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
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
module.link("../imports/api/WalletsCollection");
module.link("../imports/api/TransactionsCollection");
Meteor.startup(() => {});
///////////////////////////////////////////////////////////////////////////////////////

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ29udGFjdHNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9Db250YWN0c01ldGhvZHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL0NvbnRhY3RzUHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9UcmFuc2FjdGlvbnNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9XYWxsZXRzQ29sbGVjdGlvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiTW9uZ28iLCJtb2R1bGUiLCJsaW5rIiwidiIsImV4cG9ydERlZmF1bHQiLCJDb250YWN0c0NvbGxlY3Rpb24iLCJDb2xsZWN0aW9uIiwiZGVmYXVsdCIsIk1ldGVvciIsImNoZWNrIiwiSW1wb3J0Q29udGFjdHNSb3VuZGVkIiwibWV0aG9kcyIsIm5hbWUiLCJlbWFpbCIsImltYWdlVVJMIiwid2FsbGV0SWQiLCJTdHJpbmciLCJFcnJvciIsImluc2VydCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJjb250YWN0SWQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJfaWQiLCIkc2V0IiwiYXJjaGl2ZWQiLCJwdWJsaXNoIiwicHVibGlzaEFsbENvbnRhY3RzIiwiZmluZCIsIiRuZSIsIlRyYW5zYWN0aW9uc0NvbGxlY3Rpb24iLCJXYWxsZXRzQ29sbGVjdGlvbiIsInN0YXJ0dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSztBQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxjQUFjLEVBQUM7RUFBQ0YsS0FBSyxDQUFDRyxDQUFDLEVBQUM7SUFBQ0gsS0FBSyxHQUFDRyxDQUFDO0VBQUE7QUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQTNERixNQUFNLENBQUNHLGFBQWEsQ0FFTEMsa0JBQWtCLEdB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LG1DQUFtQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0FBQUNELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLHVDQUF1QyxDQUFDO0FBT3RUTSxNQUFNLENBQUN5QixPQUFPLENBQUMsTUFBTSxDQUVyQixDQUFDLENBQUMsQyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0c0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY29udGFjdHMnKTsiLCJpbXBvcnQgQ29udGFjdHNDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RzQ29sbGVjdGlvblwiO1xuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5pbXBvcnQgeyBJbXBvcnRDb250YWN0c1JvdW5kZWQgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICAnY29udGFjdHMuaW5zZXJ0Jyh7IG5hbWUsIGVtYWlsLCBpbWFnZVVSTCwgd2FsbGV0SWQgfSkge1xuICAgICAgICBjaGVjayhuYW1lLCBTdHJpbmcpO1xuICAgICAgICBjaGVjayhlbWFpbCwgU3RyaW5nKTtcbiAgICAgICAgY2hlY2soaW1hZ2VVUkwsIFN0cmluZyk7XG4gICAgICAgIGNoZWNrKHdhbGxldElkLCBTdHJpbmcpO1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcIk5hbWUgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YWxsZXRJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcIldhbGxldCBJRCBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29udGFjdHNDb2xsZWN0aW9uLmluc2VydCh7IFxuICAgICAgICAgICAgbmFtZSwgXG4gICAgICAgICAgICBlbWFpbCwgXG4gICAgICAgICAgICBpbWFnZVVSTCwgXG4gICAgICAgICAgICB3YWxsZXRJZCwgXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgJ2NvbnRhY3RzLnJlbW92ZScoe2NvbnRhY3RJZH0pe1xuICAgICAgICBjaGVjayhjb250YWN0SWQsIFN0cmluZyk7XG4gICAgICAgIENvbnRhY3RzQ29sbGVjdGlvbi5yZW1vdmUoY29udGFjdElkKTsgICAgICAgIFxuICAgIH0sXG4gICAgJ2NvbnRhY3RzLmFyY2hpdmUnKHsgY29udGFjdElkIH0pe1xuICAgICAgICBjaGVjayhjb250YWN0SWQsIFN0cmluZyApO1xuICAgICAgICBDb250YWN0c0NvbGxlY3Rpb24udXBkYXRlKHsgX2lkOiBjb250YWN0SWR9LCB7JHNldDogeyBhcmNoaXZlZDogdHJ1ZX19KTtcbiAgICB9XG59KVxuXG4iLCJpbXBvcnQgQ29udGFjdHNDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RzQ29sbGVjdGlvblwiXG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tIFwibWV0ZW9yL21ldGVvclwiO1xuXG5NZXRlb3IucHVibGlzaCgnYWxsQ29udGFjdHMnLCBmdW5jdGlvbiBwdWJsaXNoQWxsQ29udGFjdHMoKSB7XG4gICAgcmV0dXJuIENvbnRhY3RzQ29sbGVjdGlvbi5maW5kKCk7XG59KSBcblxuTWV0ZW9yLnB1Ymxpc2goJ2NvbnRhY3RzJywgZnVuY3Rpb24gcHVibGlzaEFsbENvbnRhY3RzKCkge1xuICAgIHJldHVybiBDb250YWN0c0NvbGxlY3Rpb24uZmluZCh7IGFyY2hpdmVkOiB7ICRuZTogdHJ1ZSB9fSk7XG59KSAiLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uc0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndHJhbnNhY3Rpb25zJyk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd3YWxsZXRzJyk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9Db250YWN0c0NvbGxlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2ltcG9ydHMvYXBpL0NvbnRhY3RzTWV0aG9kc1wiO1xuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvQ29udGFjdHNQdWJsaWNhdGlvbnNcIlxuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvV2FsbGV0c0NvbGxlY3Rpb25cIlxuaW1wb3J0IFwiLi4vaW1wb3J0cy9hcGkvVHJhbnNhY3Rpb25zQ29sbGVjdGlvblwiXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcblxufSk7XG4iXX0=
