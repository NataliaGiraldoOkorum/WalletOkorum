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
Meteor.startup(() => {});
///////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvQ29udGFjdHNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNb25nbyIsIm1vZHVsZSIsImxpbmsiLCJ2IiwiZXhwb3J0RGVmYXVsdCIsIkNvbnRhY3RzQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJzdGFydHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLEtBQUs7QUFBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFDO0VBQUNGLEtBQUssQ0FBQ0csQ0FBQyxFQUFDO0lBQUNILEtBQUssR0FBQ0csQ0FBQztFQUFBO0FBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUEzREYsTUFBTSxDQUFDRyxhQUFhLENBRUxDLGtCQUFrQixHQUFHLElBQUlMLEtBQUssQ0FBQ00sVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUYzQyxDOzs7Ozs7Ozs7OztBQ0F6QixJQUFJQyxNQUFNO0FBQUNOLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBQztFQUFDSyxNQUFNLENBQUNKLENBQUMsRUFBQztJQUFDSSxNQUFNLEdBQUNKLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFBQ0YsTUFBTSxDQUFDQyxJQUFJLENBQUMsbUNBQW1DLENBQUM7QUFHaEhLLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FFckIsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNDb2xsZWN0aW9uID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2NvbnRhY3RzJyk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgXCIuLi9pbXBvcnRzL2FwaS9Db250YWN0c0NvbGxlY3Rpb25cIjtcblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXG59KTtcbiJdfQ==
