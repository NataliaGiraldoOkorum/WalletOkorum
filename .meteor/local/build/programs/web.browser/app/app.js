var require = meteorInstall({"imports":{"ui":{"components":{"ErrorAlert.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/components/ErrorAlert.jsx                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  let React;
  module1.link("react", {
    "*"(v) {
      React = v;
    }
  }, 0);
  let Alert;
  module1.link("@mui/material/Alert", {
    default(v) {
      Alert = v;
    }
  }, 1);
  let Stack;
  module1.link("@mui/material/Stack", {
    default(v) {
      Stack = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  module1.exportDefault(ErrorAlert = _ref => {
    let {
      message
    } = _ref;
    return /*#__PURE__*/React.createElement(Stack, {
      sx: {
        width: '100%'
      },
      spacing: 2
    }, /*#__PURE__*/React.createElement(Alert, {
      severity: "error"
    }, /*#__PURE__*/React.createElement("strong", null, " ", message, " ")));
  });
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SuccessAlert.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/components/SuccessAlert.jsx                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  let React;
  module1.link("react", {
    "*"(v) {
      React = v;
    }
  }, 0);
  let Alert;
  module1.link("@mui/material/Alert", {
    default(v) {
      Alert = v;
    }
  }, 1);
  let Stack;
  module1.link("@mui/material/Stack", {
    default(v) {
      Stack = v;
    }
  }, 2);
  let AlertTitle;
  module1.link("@mui/material/AlertTitle", {
    default(v) {
      AlertTitle = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  module1.exportDefault(SuccessAlerts = _ref => {
    let {
      message
    } = _ref;
    return /*#__PURE__*/React.createElement(Stack, {
      sx: {
        width: '100%'
      },
      spacing: 2
    }, /*#__PURE__*/React.createElement(Alert, {
      severity: "success"
    }, /*#__PURE__*/React.createElement("strong", null, " ", message, " ")));
  });
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"App.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/App.jsx                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  let ButtonAppBar;
  module1.link("./ButtonAppBar", {
    default(v) {
      ButtonAppBar = v;
    }
  }, 1);
  let ContactForm;
  module1.link("./ContactForm", {
    ContactForm(v) {
      ContactForm = v;
    }
  }, 2);
  let ContactList;
  module1.link("./ContactList", {
    ContactList(v) {
      ContactList = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ButtonAppBar, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(ContactList, null))));
  _c = App;
  var _c;
  $RefreshReg$(_c, "App");
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ButtonAppBar.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/ButtonAppBar.jsx                                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  module1.export({
    default: () => ButtonAppBar
  });
  let React;
  module1.link("react", {
    "*"(v) {
      React = v;
    }
  }, 0);
  let AppBar;
  module1.link("@mui/material/AppBar", {
    default(v) {
      AppBar = v;
    }
  }, 1);
  let Box;
  module1.link("@mui/material/Box", {
    default(v) {
      Box = v;
    }
  }, 2);
  let Toolbar;
  module1.link("@mui/material/Toolbar", {
    default(v) {
      Toolbar = v;
    }
  }, 3);
  let Typography;
  module1.link("@mui/material/Typography", {
    default(v) {
      Typography = v;
    }
  }, 4);
  let Button;
  module1.link("@mui/material/Button", {
    default(v) {
      Button = v;
    }
  }, 5);
  let IconButton;
  module1.link("@mui/material/IconButton", {
    default(v) {
      IconButton = v;
    }
  }, 6);
  let MenuIcon;
  module1.link("@mui/icons-material/Menu", {
    default(v) {
      MenuIcon = v;
    }
  }, 7);
  ___INIT_METEOR_FAST_REFRESH(module);
  function ButtonAppBar() {
    return /*#__PURE__*/React.createElement(Box, {
      sx: {
        flexGrow: 1
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      position: "static"
    }, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(IconButton, {
      size: "large",
      edge: "start",
      color: "inherit",
      "aria-label": "menu",
      sx: {
        mr: 2
      }
    }, /*#__PURE__*/React.createElement(MenuIcon, null)), /*#__PURE__*/React.createElement(Typography, {
      variant: "h6",
      component: "div",
      sx: {
        flexGrow: 1
      }
    }, "News"), /*#__PURE__*/React.createElement(Button, {
      color: "inherit"
    }, "Login"))));
  }
  _c = ButtonAppBar;
  var _c;
  $RefreshReg$(_c, "ButtonAppBar");
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContactForm.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/ContactForm.jsx                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }
  }, 1);
  let ErrorAlert;
  module1.link("./components/ErrorAlert", {
    default(v) {
      ErrorAlert = v;
    }
  }, 2);
  let SuccessAlert;
  module1.link("./components/SuccessAlert", {
    default(v) {
      SuccessAlert = v;
    }
  }, 3);
  let Button;
  module1.link("@mui/material/Button", {
    default(v) {
      Button = v;
    }
  }, 4);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ContactForm = () => {
    _s();
    const [name, setName] = useState(""); //formik
    const [email, setEmail] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const showError = _ref => {
      let {
        message
      } = _ref;
      setError(message);
      setTimeout(() => {
        setError("");
      }, 5000);
    };
    const showSuccess = _ref2 => {
      let {
        message
      } = _ref2;
      setSuccess(message);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    };
    const saveContact = () => {
      //console.log({ name, email, imageURL });
      //ContactsCollection.insert({ name, email, imageURL })
      Meteor.call('contacts.insert', {
        name,
        email,
        imageURL
      }, errorResponse => {
        if (errorResponse) {
          showError({
            message: errorResponse.error
          });
        } else {
          setName("");
          setEmail("");
          setImageURL("");
          showSuccess({
            message: "contact save"
          });
        }
      });
    };
    return /*#__PURE__*/React.createElement("form", null, error && /*#__PURE__*/React.createElement(ErrorAlert, {
      message: error
    }), success && /*#__PURE__*/React.createElement(SuccessAlert, {
      message: success
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
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
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "contained",
      onClick: saveContact
    }, "Save Contact")));
  };
  _s(ContactForm, "ADAO4xB4ANhW0+zsIGUTfmpNRTA=");
  _c = ContactForm;
  var _c;
  $RefreshReg$(_c, "ContactForm");
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContactList.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/ContactList.jsx                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  module1.export({
    ContactList: () => ContactList
  });
  let React, memo;
  module1.link("react", {
    default(v) {
      React = v;
    },
    memo(v) {
      memo = v;
    }
  }, 0);
  let ContactsCollection;
  module1.link("../api/ContactsCollection", {
    default(v) {
      ContactsCollection = v;
    }
  }, 1);
  let useSubscribe, useFind;
  module1.link("meteor/react-meteor-data", {
    useSubscribe(v) {
      useSubscribe = v;
    },
    useFind(v) {
      useFind = v;
    }
  }, 2);
  let List;
  module1.link("@mui/material/List", {
    default(v) {
      List = v;
    }
  }, 3);
  let ListItem;
  module1.link("@mui/material/ListItem", {
    default(v) {
      ListItem = v;
    }
  }, 4);
  let ListItemText;
  module1.link("@mui/material/ListItemText", {
    default(v) {
      ListItemText = v;
    }
  }, 5);
  let ListItemAvatar;
  module1.link("@mui/material/ListItemAvatar", {
    default(v) {
      ListItemAvatar = v;
    }
  }, 6);
  let Avatar;
  module1.link("@mui/material/Avatar", {
    default(v) {
      Avatar = v;
    }
  }, 7);
  let Typography;
  module1.link("@mui/material/Typography", {
    default(v) {
      Typography = v;
    }
  }, 8);
  let IconButton;
  module1.link("@mui/material/IconButton", {
    default(v) {
      IconButton = v;
    }
  }, 9);
  let DeleteIcon;
  module1.link("@mui/icons-material/Delete", {
    default(v) {
      DeleteIcon = v;
    }
  }, 10);
  let Box;
  module1.link("@mui/material/Box", {
    default(v) {
      Box = v;
    }
  }, 11);
  let ArchiveIcon;
  module1.link("@mui/icons-material/Archive", {
    default(v) {
      ArchiveIcon = v;
    }
  }, 12);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ContactList = () => {
    _s();
    const isLoading = useSubscribe('contacts');
    const contacts = useFind(() => ContactsCollection.find({
      archived: {
        $ne: true
      }
    }, {
      sort: {
        createdAt: -1
      }
    }));
    const archiveContact = (event, _id) => {
      event.preventDefault();
      console.log("entra a archive");
      Meteor.call('contacts.archive', {
        contactId: _id
      });
    };
    if (isLoading()) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Loading..."));
    }
    const ContactItem = /*#__PURE__*/memo(_ref => {
      let {
        contact
      } = _ref;
      return /*#__PURE__*/React.createElement(Box, {
        sx: {
          width: 250,
          height: 90,
          p: 2,
          border: '1px dashed grey',
          '&:hover': {
            opacity: [0.5, 0.5, 0.5]
          }
        }
      }, /*#__PURE__*/React.createElement(ListItem, {
        alignItems: "flex-start"
      }, /*#__PURE__*/React.createElement(ListItemAvatar, null, /*#__PURE__*/React.createElement(Avatar, {
        alt: "",
        src: contact.imageURL
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: contact.name,
        secondary: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
          sx: {
            display: 'inline'
          },
          component: "span",
          variant: "body3",
          color: "text.primary"
        }, contact.email), /*#__PURE__*/React.createElement(IconButton, {
          "aria-label": "delete",
          onClick: event => archiveContact(event, contact._id)
        }, /*#__PURE__*/React.createElement(ArchiveIcon, null)))
      })));
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Contact List"), /*#__PURE__*/React.createElement(List, {
      sx: {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }
    }, contacts.map(contact => /*#__PURE__*/React.createElement(ContactItem, {
      key: contact._id,
      contact: contact
    }))));
  };
  _s(ContactList, "is2fGqBKKCEulJxx0fGg6MRwA10=", false, function () {
    return [useSubscribe, useFind];
  });
  _c = ContactList;
  var _c;
  $RefreshReg$(_c, "ContactList");
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"ContactsCollection.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/ContactsCollection.js                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ContactsMethods.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/api/ContactsMethods.js                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  let ContactsCollection;
  module1.link("./ContactsCollection", {
    default(v) {
      ContactsCollection = v;
    }
  }, 0);
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }
  }, 1);
  let check;
  module1.link("meteor/check", {
    check(v) {
      check = v;
    }
  }, 2);
  let ImportContactsRounded;
  module1.link("@mui/icons-material", {
    ImportContactsRounded(v) {
      ImportContactsRounded = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
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
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// client/main.jsx                                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  module1.link("../imports/api/ContactsMethods");
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    root.render( /*#__PURE__*/React.createElement(App, null));
  });
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".ts",
    ".jsx",
    ".mjs",
    ".css"
  ]
});

var exports = require("/client/main.jsx");