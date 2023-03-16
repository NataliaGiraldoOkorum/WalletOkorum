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
  let Header;
  module1.link("./Header", {
    default(v) {
      Header = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(ContactList, null))));
  _c = App;
  var _c;
  $RefreshReg$(_c, "App");
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
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button",
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
  let Divider;
  module1.link("@mui/material/Divider", {
    default(v) {
      Divider = v;
    }
  }, 5);
  let ListItemText;
  module1.link("@mui/material/ListItemText", {
    default(v) {
      ListItemText = v;
    }
  }, 6);
  let ListItemAvatar;
  module1.link("@mui/material/ListItemAvatar", {
    default(v) {
      ListItemAvatar = v;
    }
  }, 7);
  let Avatar;
  module1.link("@mui/material/Avatar", {
    default(v) {
      Avatar = v;
    }
  }, 8);
  let Typography;
  module1.link("@mui/material/Typography", {
    default(v) {
      Typography = v;
    }
  }, 9);
  let IconButton;
  module1.link("@mui/material/IconButton", {
    default(v) {
      IconButton = v;
    }
  }, 10);
  let DeleteIcon;
  module1.link("@mui/icons-material/Delete", {
    default(v) {
      DeleteIcon = v;
    }
  }, 11);
  let Box;
  module1.link("@mui/material/Box", {
    default(v) {
      Box = v;
    }
  }, 12);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ContactList = () => {
    _s();
    const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() => ContactsCollection.find({}, {
      sort: {
        createdAt: -1
      }
    }));

    // const contacts = useTracker(() => {
    //     return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch(); //Tracker 
    // });

    const removeContact = (event, _id) => {
      event.preventDefault();
      Meteor.call('contacts.remove', {
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
          onClick: event => removeContact(event, contact._id)
        }, /*#__PURE__*/React.createElement(DeleteIcon, null)))
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
  // <>
  //     <h3>Contact List</h3>
  //     {contacts.map(contact => (
  //         <li key ={contact.email}>{contact.name} - {contact.email}</li>
  //     ))}
  // </>
  _s(ContactList, "is2fGqBKKCEulJxx0fGg6MRwA10=", false, function () {
    return [useSubscribe, useFind];
  });
  _c = ContactList;
  var _c;
  $RefreshReg$(_c, "ContactList");
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Header.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/Header.jsx                                                                                          //
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
  let IconButton;
  module1.link("@mui/material/IconButton", {
    default(v) {
      IconButton = v;
    }
  }, 4);
  let Typography;
  module1.link("@mui/material/Typography", {
    default(v) {
      Typography = v;
    }
  }, 5);
  let Menu;
  module1.link("@mui/material/Menu", {
    default(v) {
      Menu = v;
    }
  }, 6);
  let Container;
  module1.link("@mui/material/Container", {
    default(v) {
      Container = v;
    }
  }, 7);
  let Avatar;
  module1.link("@mui/material/Avatar", {
    default(v) {
      Avatar = v;
    }
  }, 8);
  let Button;
  module1.link("@mui/material/Button", {
    default(v) {
      Button = v;
    }
  }, 9);
  let Tooltip;
  module1.link("@mui/material/Tooltip", {
    default(v) {
      Tooltip = v;
    }
  }, 10);
  let MenuItem;
  module1.link("@mui/material/MenuItem", {
    default(v) {
      MenuItem = v;
    }
  }, 11);
  ___INIT_METEOR_FAST_REFRESH(module);
  //import AdbIcon from '@mui/icons-material/Adb';

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState < null | HTMLElement > null;
    const [anchorElUser, setAnchorElUser] = React.useState < null | HTMLElement > null;
    const handleOpenNavMenu = event => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return /*#__PURE__*/React.createElement(AppBar, {
      position: "static"
    }, /*#__PURE__*/React.createElement(Container, {
      maxWidth: "xl"
    }, /*#__PURE__*/React.createElement(Toolbar, {
      disableGutters: true
    }, /*#__PURE__*/React.createElement(AdbIcon, {
      sx: {
        display: {
          xs: 'none',
          md: 'flex'
        },
        mr: 1
      }
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "h6",
      noWrap: true,
      component: "a",
      href: "/",
      sx: {
        mr: 2,
        display: {
          xs: 'none',
          md: 'flex'
        },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
      }
    }, "LOGO"), /*#__PURE__*/React.createElement(Box, {
      sx: {
        flexGrow: 1,
        display: {
          xs: 'flex',
          md: 'none'
        }
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "large",
      "aria-label": "account of current user",
      "aria-controls": "menu-appbar",
      "aria-haspopup": "true",
      onClick: handleOpenNavMenu,
      color: "inherit"
    }, /*#__PURE__*/React.createElement(MenuIcon, null)), /*#__PURE__*/React.createElement(Menu, {
      id: "menu-appbar",
      anchorEl: anchorElNav,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      keepMounted: true,
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      open: Boolean(anchorElNav),
      onClose: handleCloseNavMenu,
      sx: {
        display: {
          xs: 'block',
          md: 'none'
        }
      }
    }, pages.map(page => /*#__PURE__*/React.createElement(MenuItem, {
      key: page,
      onClick: handleCloseNavMenu
    }, /*#__PURE__*/React.createElement(Typography, {
      textAlign: "center"
    }, page))))), /*#__PURE__*/React.createElement(AdbIcon, {
      sx: {
        display: {
          xs: 'flex',
          md: 'none'
        },
        mr: 1
      }
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "h5",
      noWrap: true,
      component: "a",
      href: "",
      sx: {
        mr: 2,
        display: {
          xs: 'flex',
          md: 'none'
        },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
      }
    }, "LOGO"), /*#__PURE__*/React.createElement(Box, {
      sx: {
        flexGrow: 1,
        display: {
          xs: 'none',
          md: 'flex'
        }
      }
    }, pages.map(page => /*#__PURE__*/React.createElement(Button, {
      key: page,
      onClick: handleCloseNavMenu,
      sx: {
        my: 2,
        color: 'white',
        display: 'block'
      }
    }, page))), /*#__PURE__*/React.createElement(Box, {
      sx: {
        flexGrow: 0
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: "Open settings"
    }, /*#__PURE__*/React.createElement(IconButton, {
      onClick: handleOpenUserMenu,
      sx: {
        p: 0
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      alt: "Remy Sharp",
      src: "/static/images/avatar/2.jpg"
    }))), /*#__PURE__*/React.createElement(Menu, {
      sx: {
        mt: '45px'
      },
      id: "menu-appbar",
      anchorEl: anchorElUser,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      keepMounted: true,
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: Boolean(anchorElUser),
      onClose: handleCloseUserMenu
    }, settings.map(setting => /*#__PURE__*/React.createElement(MenuItem, {
      key: setting,
      onClick: handleCloseUserMenu
    }, /*#__PURE__*/React.createElement(Typography, {
      textAlign: "center"
    }, setting))))))));
  }
  _c = Header;
  module1.exportDefault(Header);
  var _c;
  $RefreshReg$(_c, "Header");
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