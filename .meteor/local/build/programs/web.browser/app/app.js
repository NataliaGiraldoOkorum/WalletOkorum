var require = meteorInstall({"imports":{"api":{"ContactsCollection.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// imports/api/ContactsCollection.js                                                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
!function (module1) {
  let Mongo;
  module1.link("meteor/mongo", {
    Mongo(v) {
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
    App: () => App
  });
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let ContactForm;
  module1.link("./ContactForm", {
    ContactForm(v) {
      ContactForm = v;
    }
  }, 1);
  let ContactList;
  module1.link("./ContactList", {
    ContactList(v) {
      ContactList = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  const App = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Meteor Wallet "), /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(ContactList, null));
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
  module1.export({
    ContactForm: () => ContactForm
  });
  let React, useState;
  module1.link("react", {
    default(v) {
      React = v;
    },
    useState(v) {
      useState = v;
    }
  }, 0);
  let ContactsCollection;
  module1.link("../api/ContactsCollection", {
    default(v) {
      ContactsCollection = v;
    }
  }, 1);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ContactForm = () => {
    _s();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageURL, setImageURL] = useState("");
    const saveContact = () => {
      console.log({
        name,
        email,
        imageURL
      });
      ContactsCollection.insert({
        name,
        email,
        imageURL
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
      onChange: e => setName(e.target.value),
      type: "text"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "email"
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: email,
      onChange: e => setEmail(e.target.value),
      id: "email"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "imageURL"
    }, "Image URL"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: imageURL,
      onChange: e => setImageURL(e.target.value),
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
    ContactList: () => ContactList
  });
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let ContactsCollection;
  module1.link("../api/ContactsCollection", {
    default(v) {
      ContactsCollection = v;
    }
  }, 1);
  let useTracker;
  module1.link("meteor/react-meteor-data", {
    useTracker(v) {
      useTracker = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ContactList = () => {
    _s();
    const contacts = useTracker(() => {
      return ContactsCollection.find({}).fetch(); //Tracker 
    });

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Contact List"), contacts.map(contact => /*#__PURE__*/React.createElement("li", {
      key: contact.email
    }, contact.name, " - ", contact.email)));
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
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let createRoot;
  module1.link("react-dom/client", {
    createRoot(v) {
      createRoot = v;
    }
  }, 1);
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }
  }, 2);
  let App;
  module1.link("/imports/ui/App", {
    App(v) {
      App = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
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