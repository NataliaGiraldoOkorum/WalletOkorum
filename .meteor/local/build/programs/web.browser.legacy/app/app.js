var require = meteorInstall({"imports":{"ui":{"components":{"ErrorAlert.jsx":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/components/ErrorAlert.jsx                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
!function (module1) {
  var React;
  module1.link("react", {
    "*": function (v) {
      React = v;
    }
  }, 0);
  var Alert;
  module1.link("@mui/material/Alert", {
    "default": function (v) {
      Alert = v;
    }
  }, 1);
  var Stack;
  module1.link("@mui/material/Stack", {
    "default": function (v) {
      Stack = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  module1.exportDefault(ErrorAlert = function (_ref) {
    var message = _ref.message;
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
  var React;
  module1.link("react", {
    "*": function (v) {
      React = v;
    }
  }, 0);
  var Alert;
  module1.link("@mui/material/Alert", {
    "default": function (v) {
      Alert = v;
    }
  }, 1);
  var Stack;
  module1.link("@mui/material/Stack", {
    "default": function (v) {
      Stack = v;
    }
  }, 2);
  var AlertTitle;
  module1.link("@mui/material/AlertTitle", {
    "default": function (v) {
      AlertTitle = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  module1.exportDefault(SuccessAlerts = function (_ref) {
    var message = _ref.message;
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
  var Header;
  module1.link("./Header", {
    "default": function (v) {
      Header = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  var App = function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(ContactList, null))));
  };
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
  var Meteor;
  module1.link("meteor/meteor", {
    Meteor: function (v) {
      Meteor = v;
    }
  }, 1);
  var ErrorAlert;
  module1.link("./components/ErrorAlert", {
    "default": function (v) {
      ErrorAlert = v;
    }
  }, 2);
  var SuccessAlert;
  module1.link("./components/SuccessAlert", {
    "default": function (v) {
      SuccessAlert = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var ContactForm = function () {
    _s();
    var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; //formik
    var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];
    var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      imageURL = _useState6[0],
      setImageURL = _useState6[1];
    var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];
    var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      success = _React$useState4[0],
      setSuccess = _React$useState4[1];
    var showError = function (_ref) {
      var message = _ref.message;
      setError(message);
      setTimeout(function () {
        setError("");
      }, 5000);
    };
    var showSuccess = function (_ref2) {
      var message = _ref2.message;
      setSuccess(message);
      setTimeout(function () {
        setSuccess("");
      }, 5000);
    };
    var saveContact = function () {
      //console.log({ name, email, imageURL });
      //ContactsCollection.insert({ name, email, imageURL })
      Meteor.call('contacts.insert', {
        name: name,
        email: email,
        imageURL: imageURL
      }, function (errorResponse) {
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
    ContactList: function () {
      return ContactList;
    }
  });
  var React, memo;
  module1.link("react", {
    "default": function (v) {
      React = v;
    },
    memo: function (v) {
      memo = v;
    }
  }, 0);
  var ContactsCollection;
  module1.link("../api/ContactsCollection", {
    "default": function (v) {
      ContactsCollection = v;
    }
  }, 1);
  var useSubscribe, useFind;
  module1.link("meteor/react-meteor-data", {
    useSubscribe: function (v) {
      useSubscribe = v;
    },
    useFind: function (v) {
      useFind = v;
    }
  }, 2);
  var List;
  module1.link("@mui/material/List", {
    "default": function (v) {
      List = v;
    }
  }, 3);
  var ListItem;
  module1.link("@mui/material/ListItem", {
    "default": function (v) {
      ListItem = v;
    }
  }, 4);
  var Divider;
  module1.link("@mui/material/Divider", {
    "default": function (v) {
      Divider = v;
    }
  }, 5);
  var ListItemText;
  module1.link("@mui/material/ListItemText", {
    "default": function (v) {
      ListItemText = v;
    }
  }, 6);
  var ListItemAvatar;
  module1.link("@mui/material/ListItemAvatar", {
    "default": function (v) {
      ListItemAvatar = v;
    }
  }, 7);
  var Avatar;
  module1.link("@mui/material/Avatar", {
    "default": function (v) {
      Avatar = v;
    }
  }, 8);
  var Typography;
  module1.link("@mui/material/Typography", {
    "default": function (v) {
      Typography = v;
    }
  }, 9);
  var IconButton;
  module1.link("@mui/material/IconButton", {
    "default": function (v) {
      IconButton = v;
    }
  }, 10);
  var DeleteIcon;
  module1.link("@mui/icons-material/Delete", {
    "default": function (v) {
      DeleteIcon = v;
    }
  }, 11);
  var Box;
  module1.link("@mui/material/Box", {
    "default": function (v) {
      Box = v;
    }
  }, 12);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  var ContactList = function () {
    _s();
    var isLoading = useSubscribe('allContacts');
    var contacts = useFind(function () {
      return ContactsCollection.find({}, {
        sort: {
          createdAt: -1
        }
      });
    });

    // const contacts = useTracker(() => {
    //     return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch(); //Tracker 
    // });

    var removeContact = function (event, _id) {
      event.preventDefault();
      Meteor.call('contacts.remove', {
        contactId: _id
      });
    };
    if (isLoading()) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Loading..."));
    }
    var ContactItem = /*#__PURE__*/memo(function (_ref) {
      var contact = _ref.contact;
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
          onClick: function (event) {
            return removeContact(event, contact._id);
          }
        }, /*#__PURE__*/React.createElement(DeleteIcon, null)))
      })));
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Contact List"), /*#__PURE__*/React.createElement(List, {
      sx: {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }
    }, contacts.map(function (contact) {
      return /*#__PURE__*/React.createElement(ContactItem, {
        key: contact._id,
        contact: contact
      });
    })));
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
  var _slicedToArray;
  module1.link("@babel/runtime/helpers/slicedToArray", {
    default: function (v) {
      _slicedToArray = v;
    }
  }, 0);
  var React;
  module1.link("react", {
    "*": function (v) {
      React = v;
    }
  }, 0);
  var AppBar;
  module1.link("@mui/material/AppBar", {
    "default": function (v) {
      AppBar = v;
    }
  }, 1);
  var Box;
  module1.link("@mui/material/Box", {
    "default": function (v) {
      Box = v;
    }
  }, 2);
  var Toolbar;
  module1.link("@mui/material/Toolbar", {
    "default": function (v) {
      Toolbar = v;
    }
  }, 3);
  var IconButton;
  module1.link("@mui/material/IconButton", {
    "default": function (v) {
      IconButton = v;
    }
  }, 4);
  var Typography;
  module1.link("@mui/material/Typography", {
    "default": function (v) {
      Typography = v;
    }
  }, 5);
  var Menu;
  module1.link("@mui/material/Menu", {
    "default": function (v) {
      Menu = v;
    }
  }, 6);
  var Container;
  module1.link("@mui/material/Container", {
    "default": function (v) {
      Container = v;
    }
  }, 7);
  var Avatar;
  module1.link("@mui/material/Avatar", {
    "default": function (v) {
      Avatar = v;
    }
  }, 8);
  var Button;
  module1.link("@mui/material/Button", {
    "default": function (v) {
      Button = v;
    }
  }, 9);
  var Tooltip;
  module1.link("@mui/material/Tooltip", {
    "default": function (v) {
      Tooltip = v;
    }
  }, 10);
  var MenuItem;
  module1.link("@mui/material/MenuItem", {
    "default": function (v) {
      MenuItem = v;
    }
  }, 11);
  ___INIT_METEOR_FAST_REFRESH(module);
  //import AdbIcon from '@mui/icons-material/Adb';

  var pages = ['Products', 'Pricing', 'Blog'];
  var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  function Header() {
    var _ref = React.useState < null | HTMLElement > null,
      _ref2 = _slicedToArray(_ref, 2),
      anchorElNav = _ref2[0],
      setAnchorElNav = _ref2[1];
    var _ref3 = React.useState < null | HTMLElement > null,
      _ref4 = _slicedToArray(_ref3, 2),
      anchorElUser = _ref4[0],
      setAnchorElUser = _ref4[1];
    var handleOpenNavMenu = function (event) {
      setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
      setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
      setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
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
    }, pages.map(function (page) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: page,
        onClick: handleCloseNavMenu
      }, /*#__PURE__*/React.createElement(Typography, {
        textAlign: "center"
      }, page));
    }))), /*#__PURE__*/React.createElement(AdbIcon, {
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
    }, pages.map(function (page) {
      return /*#__PURE__*/React.createElement(Button, {
        key: page,
        onClick: handleCloseNavMenu,
        sx: {
          my: 2,
          color: 'white',
          display: 'block'
        }
      }, page);
    })), /*#__PURE__*/React.createElement(Box, {
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
    }, settings.map(function (setting) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: setting,
        onClick: handleCloseUserMenu
      }, /*#__PURE__*/React.createElement(Typography, {
        textAlign: "center"
      }, setting));
    }))))));
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
  var Mongo;
  module1.link("meteor/mongo", {
    Mongo: function (v) {
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
  var ContactsCollection;
  module1.link("./ContactsCollection", {
    "default": function (v) {
      ContactsCollection = v;
    }
  }, 0);
  var Meteor;
  module1.link("meteor/meteor", {
    Meteor: function (v) {
      Meteor = v;
    }
  }, 1);
  var check;
  module1.link("meteor/check", {
    check: function (v) {
      check = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.methods({
    'contacts.insert': function (_ref) {
      var name = _ref.name,
        email = _ref.email,
        imageURL = _ref.imageURL;
      check(name, String);
      check(email, String);
      check(imageURL, String);
      if (!name) {
        throw new Meteor.Error("Name is required");
      }
      return ContactsCollection.insert({
        name: name,
        email: email,
        imageURL: imageURL,
        createdAt: new Date()
      });
    },
    'contacts.remove': function (_ref2) {
      var contactId = _ref2.contactId;
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
  module1.link("../imports/api/ContactsMethods");
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(function () {
    var container = document.getElementById('react-target');
    var root = createRoot(container);
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