var require = meteorInstall({"imports":{"api":{"ContactsCollection.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/api/ContactsCollection.js                                                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  var Mongo;
  module1.link("meteor/mongo", {
    Mongo: function (v) {
      Mongo = v;
    }
  }, 0);
  ___INIT_METEOR_FAST_REFRESH(module);
  module1.exportDefault(ContactsCollection = new Mongo.Collection('contacts'));
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/ui/App.jsx                                                                               //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  module1.export({
    App: function () {
      return App;
    }
  });
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var ContactForm;
  module1.link("./ContactForm", {
    ContactForm: function (v) {
      ContactForm = v;
    }
  }, 1);
  var ContactList;
  module1.link("./ContactList", {
    ContactList: function (v) {
      ContactList = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var App = function () {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Meteor Wallet - Galaxy"), /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(ContactList, null));
  };
  _c = App;
  var _c;
  $RefreshReg$(_c, "App");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContactForm.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/ui/ContactForm.jsx                                                                       //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  var _slicedToArray;
  module1.link("@babel/runtime/helpers/slicedToArray", {
    default: function (v) {
      _slicedToArray = v;
    }
  }, 0);
  module1.export({
    ContactForm: function () {
      return ContactForm;
    }
  });
  var React, useState;
  module1.link("react", {
    "default": function (v) {
      React = v;
    },
    useState: function (v) {
      useState = v;
    }
  }, 0);
  var ContactsCollection;
  module1.link("../api/ContactsCollection", {
    "default": function (v) {
      ContactsCollection = v;
    }
  }, 1);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var ContactForm = function () {
    _s();
    var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];
    var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];
    var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      imageURL = _useState6[0],
      setImageURL = _useState6[1];
    var saveContact = function () {
      console.log({
        name: name,
        email: email,
        imageURL: imageURL
      });
      ContactsCollection.insert({
        name: name,
        email: email,
        imageURL: imageURL
      });
      setName("");
      setEmail("");
      setImageURL("");
    };
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Name"), /*#__PURE__*/React.createElement("input", {
      id: "name",
      value: name,
      onChange: function (e) {
        return setName(e.target.value);
      },
      type: "text"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "email"
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: email,
      onChange: function (e) {
        return setEmail(e.target.value);
      },
      id: "email"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "imageURL"
    }, "Image URL"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: imageURL,
      onChange: function (e) {
        return setImageURL(e.target.value);
      },
      id: "imageURL"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: saveContact
    }, "Save Contact")));
  };
  _s(ContactForm, "NND6VoWO4p0iFFIDzM/bN8nDTqA=");
  _c = ContactForm;
  var _c;
  $RefreshReg$(_c, "ContactForm");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContactList.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/ui/ContactList.jsx                                                                       //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  module1.export({
    ContactList: function () {
      return ContactList;
    }
  });
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var ContactsCollection;
  module1.link("../api/ContactsCollection", {
    "default": function (v) {
      ContactsCollection = v;
    }
  }, 1);
  var useTracker;
  module1.link("meteor/react-meteor-data", {
    useTracker: function (v) {
      useTracker = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var ContactList = function () {
    _s();
    var contacts = useTracker(function () {
      return ContactsCollection.find({}).fetch(); //Tracker 
    });

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Contact List"), contacts.map(function (contact) {
      return /*#__PURE__*/React.createElement("li", {
        key: contact.email
      }, contact.name, " - ", contact.email);
    }));
  };
  _s(ContactList, "3eL2hajkH7T/yYuDAR4jjQdxS1Q=", false, function () {
    return [useTracker];
  });
  _c = ContactList;
  var _c;
  $RefreshReg$(_c, "ContactList");
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.jsx":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// client/main.jsx                                                                                  //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  var React;
  module1.link("react", {
    "default": function (v) {
      React = v;
    }
  }, 0);
  var createRoot;
  module1.link("react-dom/client", {
    createRoot: function (v) {
      createRoot = v;
    }
  }, 1);
  var Meteor;
  module1.link("meteor/meteor", {
    Meteor: function (v) {
      Meteor = v;
    }
  }, 2);
  var App;
  module1.link("/imports/ui/App", {
    App: function (v) {
      App = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(function () {
    var container = document.getElementById('react-target');
    var root = createRoot(container);
    root.render( /*#__PURE__*/React.createElement(App, null));
  });
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".jsx",
    ".css"
  ]
});

var exports = require("/client/main.jsx");