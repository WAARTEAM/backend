function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar> </app-navbar>\r\n\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet> </router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatpage/chatpage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatpage/chatpage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatpageChatpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"latest\" class=\" card blue-gradient lighten-3 chat-room mt-3\">\r\n\r\n    <div class=\"card-body\">\r\n        <!-- Grid row -->\r\n        <div class=\"row px-lg-2 px-2\">\r\n            <!-- Grid column -->\r\n            <div *ngIf=\"innerWidth > 1270 || page == 'headers'\" class=\"col-md- col-xl-4 px-0\">\r\n                <span style=\"text-align: center;\">\r\n          <button\r\n            (click)=\"getMessages()\"\r\n            type=\"button\"\r\n            outline=\"true\"\r\n            rounded=\"true\"\r\n            style=\"border-radius: 20px;margin-top: -20px; \"\r\n            class=\"btn btn-info btn-rounded btn-sm  waves-effect waves-light\"\r\n          >\r\n            Friends\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            outline=\"true\"\r\n            rounded=\"true\"\r\n            style=\"border-radius: 20px;margin-top: -20px; \"\r\n            class=\"btn btn-info btn-rounded btn-sm waves-effect waves-light \"\r\n            (click)=\"getChatrooms()\"\r\n          >\r\n            Chatrooms\r\n          </button>\r\n        </span>\r\n\r\n                <div class=\"white z-depth-1 px-3 pt-3 p-2\">\r\n                    <!-- :========================================= Friends list ==============================================-->\r\n\r\n                    <ul *ngIf=\"render === 'friends'\" style=\"height: 70vh; overflow-y: scroll; \" class=\"list-unstyled friend-list \">\r\n                        <li *ngIf=\"!latest.length\" class=\"lighten-3 p-2 text-muted text-center\">You have no messages yet </li>\r\n                        <li style=\"height: 5em;\" (click)=\"changeCurrent(message);page = 'chat'\" *ngFor=\"let message of latest\" class=\"lighten-3 p-2\" [ngClass]=\"{\r\n                'active grey': receiverId(message) === currentReceiver\r\n              }\">\r\n                            <a class=\"d-flex justify-content-between\">\r\n                                <img [src]=\"http.initialsGenerator(\r\n                  message.sender.username === currentUserUsername?\r\n                  message.receiver.firstname + ' ' + message.receiver.lastname : \r\n                  message.sender.firstname + ' ' + message.sender.lastname )\" alt=\"avatar\" class=\"avatar rounded-circle d-flex align-self-center mr-2 z-depth-1\" />\r\n                                <div class=\"text-small\">\r\n                                    <strong style=\"float: left;\">\r\n                    {{\r\n                      message.sender.username === currentUserUsername\r\n                        ? message.receiver.firstname +\r\n                          \" \" +\r\n                          message.receiver.lastname\r\n                        : message.sender.firstname +\r\n                          \" \" +\r\n                          message.sender.lastname\r\n                    }}\r\n                  </strong>\r\n                                    <br />\r\n                                    <p style=\"text-overflow: ellipsis; max-height: 1.5em; max-width: 120px; overflow: hidden;\" class=\"last-message text-muted\">{{ message.content }}</p>\r\n                                </div>\r\n                                <div class=\"chat-footer\">\r\n                                    <p class=\"text-smaller text-muted mb-0\">{{getTime(message._id)}}</p>\r\n                                    <!-- <span class=\"badge badge-danger float-right\">1</span> -->\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n\r\n\r\n                    </ul>\r\n\r\n\r\n\r\n\r\n                    <!-- :========================================= Chats list ==============================================-->\r\n\r\n                    <ul *ngIf=\"render === 'chatrooms'\" style=\"height: 65vh; overflow-y: scroll; \" class=\"list-unstyled friend-list \">\r\n                        <li *ngIf=\"!latestChatrooms.length\" class=\"lighten-3 p-2 text-muted text-center\">You are not in any chatroom yet </li>\r\n\r\n                        <li (click)=\"currentChatroom(chatroom);page = 'chat'\" *ngFor=\"let chatroom of latestChatrooms\" class=\"lighten-3 p-2\" [ngClass]=\"{\r\n                          'active grey': chatroom._id === currentRoom._id\r\n                        }\">\r\n                            <a class=\"d-flex justify-content-between\">\r\n                                <img [src]=\"http.initialsGenerator(chatroom.name, 90)\" alt=\"avatar\" class=\"avatar rounded-circle d-flex align-self-center mr-2 z-depth-1\" />\r\n                                <div class=\"text-small\">\r\n                                    <strong>\r\n                    {{ chatroom.name }}\r\n                  </strong>\r\n                                    <br />\r\n                                    <p class=\"last-message text-muted\"></p>\r\n                                </div>\r\n                                <div class=\"chat-footer\">\r\n\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <button data-toggle=\"modal\" data-target=\"#centralModalSm\" *ngIf=\"render === 'chatrooms'\" type=\"button\" outline=\"true\" rounded=\"true\" style=\"border-radius: 20px;margin-top: -5px; \" class=\"btn btn-info btn-rounded btn-sm waves-effect waves-light \" (click)=\"getChatrooms()\">\r\n            +\r\n          </button>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Grid column -->\r\n            <!-- Central Modal Small -->\r\n            <div class=\"modal fade\" id=\"centralModalSm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <!-- Change class .modal-sm to change the size of the modal -->\r\n\r\n                <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h4 class=\"modal-title w-100 text-muted align-self-center\" style=\"font-family:sans-serif;\" id=\"myModalLabel\">\r\n                                make chatroom\r\n                            </h4>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n                        </div>\r\n                        <div class=\"modal-body text-muted\">\r\n                            <input type=\"text\" placeholder=\"chatroom name\" [(ngModel)]=\"chatroomName\" />\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">\r\n                Close\r\n              </button>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"createChatroom()\">\r\n                Save changes\r\n              </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Central Modal Small -->\r\n\r\n            <!-- Grid column -->\r\n\r\n            <div style=\"width: 100%;\" *ngIf=\" innerWidth > 1270 || page == 'chat'\" [ngClass]=\"{'col-md-6 col-xl-8 pl-md-3 mt-4 px-lg-auto px-0': innerWidth > 1270}\">\r\n                <!-- dropdown list -->\r\n                <div class=\"row justify-content-between\">\r\n\r\n                    <i (click)=\"page = 'headers'\" *ngIf=\"innerWidth < 1270\" style=\"font-size: 2em;color: #fff;cursor: pointer;\" class=\"mb-4 fas fa-arrow-left col\"></i>\r\n\r\n                    <div style=\"color: #fff;cursor: pointer;text-align: right;\" *ngIf=\"render === 'chatrooms' && messages\" class=\"mb-4 dropdown ml-auto col mr-4\">\r\n                        <!--Trigger-->\r\n\r\n                        <a type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img id=\"dropdownMenu2\" width=\"25px\" src=\"../../../assets/open-menu.png\" /></a>\r\n\r\n                        <!--Menu-->\r\n                        <div *ngIf=\"currentRoom && currentUser \" class=\"dropdown-menu dropdown-primary\">\r\n                            <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modelFriends\" (click)=\"members()\">\r\n                Members\r\n              </a>\r\n                            <a *ngIf=\"currentUser._id === currentRoom.admin\" (click)=\"fetchFriends()\" class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#modelFriends\">Add member</a\r\n              >\r\n              <a class=\"dropdown-item\" (click)=\"leaveChatroom()\"\r\n                >{{\r\n                  currentUser._id === currentRoom.admin ? \"Delete\" : \"Leave\"\r\n                }}\r\n                chatroom</a\r\n              >\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n\r\n        <div *ngIf=\"messages\" class=\"chat-message\">\r\n          <ul id=\"scrollable\"\r\n            [scrollTop]=\"100000000\"\r\n\r\n            class=\"list-unstyled chat\"\r\n            style=\" overflow-y: scroll; margin-top: 0px;\"\r\n            [ngStyle]=\"{'height': height}\"\r\n          >\r\n            <!--================================= the Sent message ============================================  -->\r\n            <div style=\"width: 95%;\" *ngFor=\"let message of messages\">\r\n              <li\r\n                *ngIf=\"message.sender.username !== currentUserUsername\"\r\n                class=\"d-flex justify-content-left mb-4\"\r\n                style=\"min-height: 5em ; width: 100%;\"\r\n\r\n              >\r\n                <img\r\n                  [src]=\"\r\n                    http.initialsGenerator(\r\n                      message.sender.firstname + ' ' + message.sender.lastname,\r\n                      200\r\n                    )\r\n                  \"\r\n                  alt=\"avatar\"\r\n                  class=\"avatar rounded-circle conv mr-2 ml-lg-3 ml-0 z-depth-1\"\r\n                />\r\n                <div\r\n                  class=\"chat-body white p-3 ml-2 z-depth-1\"\r\n                  style=\"display: flex ; flex-direction: column; justify-content: center; width: 85%; float: left;\"\r\n                >\r\n                  <div class=\"header\">\r\n                    <strong class=\"primary-font\">{{\r\n                      message.sender.firstname + \" \" + message.sender.lastname\r\n                    }}</strong>\r\n\r\n                    <small class=\"pull-right text-muted mx-4\" style=\"float:right\">\r\n                      <i class=\"far fa-clock\"></i>{{getTime(message._id)}}</small\r\n\r\n                    >\r\n                  </div>\r\n                  <hr class=\"w-100\" style=\"margin:2px\" />\r\n                  <p class=\"mb-0\" style=\"margin-top:0px;\">\r\n                    {{ message.content }}\r\n                  </p>\r\n                </div>\r\n              </li>\r\n              <!-- ============================ The recieved message ============================= -->\r\n              <li\r\n                *ngIf=\"message.sender.username === currentUserUsername\"\r\n\r\n                class=\"d-flex justify-content-right mb-4\"\r\n                style=\"min-height: 5em;\"\r\n\r\n              >\r\n                <div\r\n                  class=\"chat-body white p-3 ml-2 z-depth-1\"\r\n                  style=\"display: flex ; flex-direction: column; justify-content: center; width: 85%;\"\r\n                >\r\n                  <div class=\"header\">\r\n                    <strong class=\"primary-font\">{{\r\n                      message.sender.firstname + \" \" + message.sender.lastname\r\n                    }}</strong>\r\n                    <small class=\"pull-right text-muted\" style=\"float:right\">\r\n                      <i class=\"far fa-clock\"></i>{{getTime(message._id)}}</small\r\n                    >\r\n                  </div>\r\n                  <hr class=\"w-100\" style=\"margin:2px\" />\r\n                  <p class=\"mb-0\" style=\"margin-top:0px;\">\r\n                    {{ message.content }}\r\n                  </p>\r\n                </div>\r\n                <img\r\n                  [src]=\"\r\n                    http.initialsGenerator(\r\n                      message.sender.firstname + ' ' + message.sender.lastname,\r\n                      200\r\n                    )\r\n                  \"\r\n                  alt=\"avatar\"\r\n                  class=\"avatar rounded-circle mr-0 ml-3 z-depth-1\"\r\n                />\r\n              </li>\r\n            </div>\r\n            <!-- ============================ The textarea ============================= -->\r\n          </ul>\r\n           <div >\r\n           <!-- <div class=\"form-group basic-textarea\">\r\n              <textarea\r\n                [(ngModel)]=\"content\"\r\n                class=\"form-control pl-2 my-0\"\r\n                id=\"exampleFormControlTextarea2\"\r\n                rows=\"3\"\r\n                placeholder=\"Type your message here...\"\r\n              ></textarea>\r\n            </div>\r\n            <button\r\n              (click)=\"sendMessage()\"\r\n              type=\"button\"\r\n              outline=\"true\"\r\n              rounded=\"true\"\r\n              style=\"border-radius: 20px  ; \"\r\n              class=\"btn btn-info btn-rounded btn-sm waves-effect waves-light  float-right\"\r\n            >\r\n              Send\r\n            </button>-->\r\n            <div class=\"md-form input-group mb-3\">\r\n              <input [(ngModel)]=\"content\" style=\"background: white;\" type=\"text\" class=\"form-control py-2\" placeholder=\"Type your message here...\" aria-label=\"Recipient's username\"\r\n                aria-describedby=\"MaterialButton-addon2\">\r\n              <div class=\"input-group-append\">\r\n                <button (click)=\"sendMessage()\" class=\"btn btn-md btn-info m-0 px-3 mr-4\" type=\"button\" id=\"MaterialButton-addon2\">Send</button>\r\n              </div>\r\n            </div>\r\n          </div> \r\n        </div>\r\n      </div>\r\n      </div>\r\n      <!-- Grid column -->\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Grid row -->\r\n\r\n<!-- </div> -->\r\n\r\n\r\n<!-- addMember -->\r\n\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"modelFriends\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div\r\n    class=\"modal-dialog modal-notify modal-info w-responsive\"\r\n    role=\"document\"\r\n  >\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">{{ toggle ? \"Members\" : \"Friends\" }} List</p>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div *ngIf=\"friends\" class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <div>\r\n            <li\r\n              \r\n              *ngFor=\"let friend of friends\"\r\n              class=\"d-flex justify-content-between mb-4\"\r\n              style=\"height: 6em;\"\r\n            >\r\n              <img\r\n                alt=\"avatar\"\r\n                class=\"avatar rounded-circle conv mr-2 ml-lg-3 ml-0 z-depth-1\"\r\n                [src]=\"http.initialsGenerator(friend.username)\"\r\n                width=\"50px\"\r\n              />\r\n              <div\r\n                class=\"chat-body white p-3 ml-2 z-depth-1\"\r\n                style=\"display: flex ; flex-direction: column; justify-content: center; width: 100%; float: left;\"\r\n              >\r\n                <div class=\"header\">\r\n                  <strong\r\n                    [routerLink]=\"toggle? '/users/' + friend.username: null\"\r\n                    (click)=\"toggle?null : addMember(friend)\"\r\n                    style=\"cursor: pointer;\"\r\n                    class=\"primary-font\"\r\n                    data-dismiss=\"modal\"\r\n                  >\r\n                    {{ friend.username }}\r\n                  </strong>\r\n                </div>\r\n\r\n                <hr class=\"w-100\" style=\"margin:2px\" />\r\n                <p class=\"mb-0\" style=\"margin-top:0px;\">\r\n                  {{ friend.firstname + \" \" + friend.lastname }}\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a\r\n          type=\"button\"\r\n          class=\"btn btn-outline-primary waves-effect\"\r\n          data-dismiss=\"modal\"\r\n          outline=\"true\"\r\n          >Go Back</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--  -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\r\n  <h1 style=\"color: white\">OMEGLE</h1>\r\n  <p class=\"lead\" style=\"color: white;\">\r\n    JOIN OUR CHATROOMS\r\n  </p>\r\n  <div>\r\n    <button\r\n      id=\"btn\"\r\n      (click)=\"(submit)\"\r\n      mdbBtn\r\n      color=\"white\"\r\n      outline=\"true\"\r\n      rounded=\"true\"\r\n      block=\"true\"\r\n      class=\"my-4 waves-effect z-depth-0\"\r\n      mdbWavesEffect\r\n      type=\"submit\"\r\n      routerLink=\"register\"\r\n      style=\"border-radius: 20px;\"\r\n    >\r\n      Sign up\r\n    </button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Material form register -->\r\n<div class=\"card mx-auto\" style=\"width: 350px; height: 400px; margin-top: 70px;\">\r\n    <h5 class=\"card-header info-color white-text text-center py-4 blue-gradient\">\r\n        <strong>Login</strong>\r\n    </h5>\r\n\r\n    <!--Card content-->\r\n    <div class=\"card-body px-lg-5 pt-0\">\r\n        <!-- Form -->\r\n        <form #form=\"ngForm\" (ngSubmit)=\"onLogin(form)\" class=\"text-center\" style=\"color: #757575;\" action=\"#!\">\r\n            <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                    <!-- First name -->\r\n                    <div class=\"md-form\">\r\n                        <input type=\"text\" id=\"materialRegisterFormFirstName\" class=\"form-control\" ngModel name=\"username\" />\r\n                        <label for=\"materialRegisterFormFirstName\">Username</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- E-mail -->\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n                <input type=\"password\" id=\"materialRegisterFormPassword\" class=\"form-control\" aria-describedby=\"materialRegisterFormPasswordHelpBlock\" ngModel name=\"password\" />\r\n                <label for=\"materialRegisterFormPassword\">Password</label>\r\n                <small id=\"materialRegisterFormPasswordHelpBlock\" class=\"form-text text-muted mb-4\">\r\n          At least 8 characters and 1 digit\r\n        </small>\r\n            </div>\r\n\r\n            <!-- Sign up button -->\r\n            <button (click)=\"(submit)\" mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect type=\"submit\" style=\"border-radius: 20px;\">\r\n        Sign in\r\n      </button>\r\n\r\n            <hr />\r\n        </form>\r\n\r\n        <!-- Form -->\r\n    </div>\r\n</div>\r\n<!-- Material form register -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Navbar-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark blue-gradient \">\r\n    <!-- Navbar brand -->\r\n    <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"router-link-active\"> Omegle</a>\r\n    <!-- Collapse button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n    <!-- Collapsible content -->\r\n    <div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">\r\n        <!-- Links -->\r\n        <ul class=\"navbar-nav\">\r\n          <li *ngIf=\"isAuthenticated\" class=\"nav-item active\" [routerLinkActive]=\"['active']\">\r\n  \r\n              <a class=\"nav-link\" routerLink=\"profile\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                Profile\r\n              </a>\r\n          </li>\r\n          <li *ngIf=\"isAuthenticated\" class=\"nav-item active\" [routerLinkActive]=\"['active']\">\r\n  \r\n            <a class=\"nav-link\" routerLink=\"info\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n              Info\r\n            </a>\r\n        </li>\r\n        </ul>\r\n        <ul class=\"ml-auto navbar-nav\">\r\n\r\n          <div *ngIf=\"isAuthenticated\" class=\"form-inline\">\r\n            <div class=\"md-form my-0\">\r\n              <input style=\"color: white;\" [(ngModel)]=\"inputVal\" class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n            </div>\r\n            <button (click)=\"assignVal()\" class=\"btn btn-outline-white btn-md my-0 ml-sm-2\" type=\"submit\">Search</button>\r\n          </div>\r\n      \r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n\r\n            <li *ngIf=\"!isAuthenticated\" class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                <a class=\"nav-link\" routerLink=\"login\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                login\r\n              </a>\r\n            </li>\r\n\r\n            <li *ngIf=\"isAuthenticated\" class=\"nav-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                <a class=\"nav-link\" (click)=\"logOut()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n              logout\r\n            </a>\r\n            </li>\r\n            <!-- <span style = \"float: right;\" class=\"nav-item\"   routerLink=\"/logout\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n              logout\r\n            </span> -->\r\n        </ul>\r\n\r\n        <!-- <li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n      </li> -->\r\n        <!-- Dropdown -->\r\n        <!-- <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          id=\"navbarDropdownMenuLink\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          >Dropdown</a\r\n        >\r\n        <div\r\n          class=\"dropdown-menu dropdown-primary\"\r\n          aria-labelledby=\"navbarDropdownMenuLink\"\r\n        >\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li> -->\r\n\r\n        <!-- Links -->\r\n    </div>\r\n\r\n    <!-- Collapsible content -->\r\n</nav>\r\n<!--/.Navbar-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"status && $user | async as user\" style=\"display: flex; flex-direction:column; height: 600px;\" class=\"card testimonial-card my-4 text-center\">\r\n    <!-- Background color -->\r\n    <div style=\"flex:10;\" class=\"card-up blue-gradient\"></div>\r\n\r\n    <!-- Avatar -->\r\n    <div style=\"margin-top: -125px; border-radius: 200px;\" class=\"mx-auto white\">\r\n        <img [src]=\"http.initialsGenerator(user.firstname + ' ' + user.lastname)\" class=\"rounded-circle\" alt=\"woman avatar\" />\r\n    </div>\r\n\r\n    <!-- Content -->\r\n    <div style=\"flex:13\" class=\"card-body\">\r\n        <!-- Name -->\r\n        <h4 class=\"card-title\">{{ user.firstname + \" \" + user.lastname }}</h4>\r\n        <hr />\r\n        <!-- Quotation -->\r\n        <p>\r\n            <i class=\"fas fa-quote-left\"></i> {{user.bio}}\r\n\r\n        </p>\r\n\r\n        <div class=\"modal fade\" id=\"modelSendMessage\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\r\n                <!--Content-->\r\n                <div class=\"modal-content\">\r\n                    <!--Header-->\r\n                    <div class=\"modal-header\">\r\n                        <img [src]=\"\r\n                http.initialsGenerator(user.firstname + ' ' + user.lastname)\r\n              \" class=\"rounded-circle\" alt=\"avatar\" />\r\n                    </div>\r\n                    <!--Body-->\r\n                    <div class=\"modal-body text-center mb-1\">\r\n                        <h5 class=\"mt-1 mb-2\">\r\n                            {{ user.firstname + \" \" + user.lastname }}\r\n                        </h5>\r\n\r\n                        <div class=\"md-form ml-0 mr-0\">\r\n                            <input #inputField type=\"text\" type=\"text\" id=\"form29\" class=\"form-control form-control-sm validate ml-0\" />\r\n                            <label data-error=\"wrong\" data-success=\"Sent\" for=\"form29\" class=\"ml-0\">Enter Your Message</label\r\n              >\r\n            </div>\r\n\r\n            <div class=\"text-center mt-4\">\r\n              <button\r\n                (click)=\"sendMessage(inputField.value)\"\r\n                class=\"btn btn-blue mt-1\"\r\n              >\r\n                Send<i class=\"fas fa-sign-in ml-1\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/.Content-->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-center\">\r\n      <!-- The Button for sending messages dirictly fome the profile-->\r\n      <div *ngIf=\"status == 'Remove friend'\" class=\"text-center\">\r\n        <a\r\n          href=\"\"\r\n          class=\"my-4 waves-effect z-depth-0 py-3 px-4\"\r\n          style=\"border-radius: 100px; width: auto;\"\r\n          mdbBtn\r\n          color=\"blue\"\r\n          block=\"true\"\r\n          data-toggle=\"modal\"\r\n          data-target=\"#modelSendMessage\"\r\n          ><i class=\"fas fa-paper-plane\"></i\r\n        ></a>\r\n      </div>\r\n\r\n      <!-- Button for sending/removeing/accepting a friend request -->\r\n      <button\r\n        *ngIf=\"!profile\"\r\n        class=\"my-4 waves-effect z-depth-0 mx-2\"\r\n        style=\"border-radius: 20px;width: 200px;\"\r\n        mdbBtn\r\n        color=\"blue\"\r\n        outline=\"true\"\r\n        rounded=\"true\"\r\n        block=\"true\"\r\n        mdbWavesEffect\r\n        (click)=\"handleFriendRequests()\"\r\n      >\r\n        {{ status }}\r\n      </button>\r\n\r\n      <!-- Button for showing the friends of th ecurrent user -->\r\n      <a\r\n        (click)=\"getAllFreinds()\"\r\n        class=\"my-4 waves-effect z-depth-0 py-3 px-4\"\r\n        style=\"border-radius: 100px; width: auto;\"\r\n        mdbBtn\r\n        color=\"blue\"\r\n        data-toggle=\"modal\"\r\n        data-target=\"#modelFriends\"\r\n        >Friends</a\r\n      >\r\n\r\n      <a\r\n        *ngIf=\"profile\"\r\n        (click)=\"getAllRequests()\"\r\n        class=\"my-4 waves-effect z-depth-0 py-3 px-4\"\r\n        style=\"border-radius: 100px; width: auto;\"\r\n        mdbBtn\r\n        color=\"blue\"\r\n        data-toggle=\"modal\"\r\n        data-target=\"#modelFriends\"\r\n        >Requests</a\r\n      >\r\n    </div>\r\n\r\n    <!-- Central Modal Medium Info -->\r\n    <div\r\n      class=\"modal fade\"\r\n      id=\"modelFriends\"\r\n      tabindex=\"-1\"\r\n      role=\"dialog\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      aria-hidden=\"true\"\r\n    >\r\n      <div\r\n        class=\"modal-dialog modal-notify modal-info w-responsive\"\r\n        role=\"document\"\r\n      >\r\n        <!--Content-->\r\n        <div class=\"modal-content\">\r\n          <!--Header-->\r\n          <div class=\"modal-header\">\r\n            <p class=\"heading lead\">Freinds List</p>\r\n          </div>\r\n\r\n          <!--Body-->\r\n          <div class=\"modal-body\">\r\n            <div class=\"text-center\">\r\n              <div>\r\n                <li\r\n                  *ngFor=\"let friend of friends\"\r\n                  class=\"d-flex justify-content-between mb-4\"\r\n                  style=\"height: 6em;\"\r\n                >\r\n                  <img\r\n                    alt=\"avatar\"\r\n                    class=\"avatar rounded-circle conv mr-2 ml-lg-3 ml-0 z-depth-1\"\r\n                    [src]=\"http.initialsGenerator(friend.firstname + ' ' + friend.lastname,90)\"\r\n                  />\r\n                  <div\r\n                    class=\"chat-body white p-3 ml-2 z-depth-1\"\r\n                    style=\"display: flex ; flex-direction: column; justify-content: center; width: 100%; float: left;\"\r\n                  >\r\n                    <div class=\"header\">\r\n                      <strong\r\n                        [routerLink]=\"'/users/' + friend.username\"\r\n                        class=\"primary-font\"\r\n                        data-dismiss=\"modal\"\r\n                      >\r\n                        {{ friend.username }}\r\n                      </strong>\r\n                    </div>\r\n\r\n                    <hr class=\"w-100\" style=\"margin:2px\" />\r\n                    <p class=\"mb-0\" style=\"margin-top:0px;\">\r\n                      {{ friend.firstname + \" \" + friend.lastname }}\r\n                    </p>\r\n                  </div>\r\n                  <a\r\n                    *ngIf=\"isRequest\"\r\n                    (click)=\"acceptFriendRequest(friend._id)\"\r\n                    class=\"my-4 waves-effect z-depth-0 py-3 px-4 mx-4\"\r\n                    style=\"border-radius: 35px; width: 100px;\"\r\n                    mdbBtn\r\n                    color=\"green\"\r\n                    block=\"true\"\r\n                    ><i class=\"fas fa-check\"></i\r\n                  ></a>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--Footer-->\r\n          <div class=\"modal-footer justify-content-center\">\r\n            <a\r\n              type=\"button\"\r\n              class=\"btn btn-outline-primary waves-effect\"\r\n              data-dismiss=\"modal\"\r\n              outline=\"true\"\r\n              >Go Back</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-area/search-area.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-area/search-area.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchAreaSearchAreaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"$users | async as users\" style=\"height: 600px; width: 700px; \" class=\" card blue-gradient lighten-3 chat-room mt-3 mx-auto \">\r\n  <h3 style=\"text-align: center;color: white;\" class=\"mt-4\">\r\n    <b>{{users.length==0? \"Nothing was found\" : users.length == 1? \"1 result was found\": users.length + \" results were found\"}}</b></h3>\r\n  <hr style=\"background: white;\">\r\n    <div class=\"card-body\" style=\"overflow-y: scroll;\">\r\n      <!-- Grid row -->\r\n      <div class=\"row px-lg-2 px-2 justify-content-center \">\r\n        <!-- Grid column -->\r\n        <div\r\n        *ngFor=\"let user of users\" \r\n        style=\"width : 400px\"\r\n        class=\"active white rounded-pill border border-primary lighten-3 p-2 my-2 col-8\"\r\n      >\r\n        <a class=\"d-flex justify-content-left\">\r\n          <img\r\n          [src]=\"http.initialsGenerator(user.name, 100)\"\r\n            alt=\"avatar\"\r\n            class=\"avatar rounded-circle d-flex align-self-center mr-2 z-depth-1\"\r\n          />\r\n          <div class=\"text-small\">\r\n            <strong [routerLink]=\"'/users/' + user.username\" routerLinkActive=\"router-link-active\"  style=\"float: left; cursor: pointer;\">\r\n              {{user.name}}\r\n            </strong>\r\n            <br />\r\n            <p class=\"last-message text-muted\">{{user.username}}</p>\r\n          </div>\r\n          <div class=\"chat-footer\">\r\n          </div>\r\n        </a>\r\n    </div\r\n    >\r\n        <!-- Grid column -->\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-6 col-xl-8 pl-md-3 mt-4 px-lg-auto px-0\">\r\n          <div class=\"chat-message\">\r\n            \r\n            <div class=\"white\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Grid column -->\r\n      </div>\r\n      <!-- Grid row -->\r\n    </div>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"$user | async as user\" class=\" card blue-gradient lighten-3 chat-room mt-3\">\r\n    <div   class=\"card-body\">\r\n      <!-- Grid row -->\r\n      <div class=\"row px-lg-2 px-2 justify-content-center\">\r\n        <!-- Grid column -->\r\n        <div style=\"width: 70%;\" class=\"mx-auto\">\r\n          <div style=\"width: 100%;\" class=\"white z-depth-1 px-3 pt-3 p-2\">\r\n            <form #submitForm=\"ngForm\" class=\"text-center\" (ngSubmit)=\"formSubmitted(submitForm)\" style=\"color: #9933CC;\">\r\n                <!-- User Name -->\r\n                <div class=\"md-form\">\r\n                    <input  required type=\"text\" id=\"materialRegisterFormPhone\" class=\"form-control\" aria-describedby=\"materialRegisterFormPhoneHelpBlock\" mdbInput [ngModel]=\"user.username\" name=\"username\" />\r\n                    <label for=\"materialRegisterFormPhone\">Username</label>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"col\">\r\n                        <!-- First name -->\r\n                        <div class=\"md-form\">\r\n                            <input required name=\"firstname\" type=\"text\" id=\"materialRegisterFormFirstName\" class=\"form-control \" mdbInput [ngModel]=\"user.firstname\" />\r\n                            <label for=\"materialRegisterFormFirstName\">First name</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <!-- Last name -->\r\n                        <div class=\"md-form\">\r\n                            <input required type=\"email\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput [ngModel]=\"user.lastname\" name=\"lastname\" />\r\n                            <label for=\"materialRegisterFormLastName\">Last name</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- E-mail -->\r\n                <div class=\"md-form mt-0\">\r\n                    <input required type=\"email\" id=\"materialRegisterFormEmail\" class=\"form-control\" mdbInput [ngModel]=\"user.email\" name=\"email\" />\r\n                    <label for=\"materialRegisterFormEmail\">E-mail</label>\r\n                </div>\r\n\r\n                <!-- Bio -->\r\n\r\n                <div class=\"md-form mt-0\">\r\n                    <input required type=\"text\" id=\"materialRegisterFormBio\" class=\"form-control\" mdbInput [ngModel]=\"user.bio\" name=\"bio\" />\r\n                    <label for=\"materialRegisterFormBio\">Bio</label>\r\n                </div>\r\n\r\n                <!-- Password -->\r\n                <div class=\"md-form\">\r\n                    <input required type=\"password\" id=\"materialRegisterFormNewPassword\" class=\"form-control\" aria-describedby=\"materialRegisterFormNewPasswordHelpBlock\" mdbInput ngModel name=\"newpassword\" />\r\n                    <label for=\"materialRegisterFormNewPassword\">New Password</label>\r\n                    <small id=\"materialRegisterFormNewPasswordHelpBlock\" class=\"form-text text-muted mb-4\">\r\n              At least 8 characters\r\n            </small>\r\n                </div>\r\n    \r\n                <!-- Sign up button -->\r\n                <div class=\"form-row\">\r\n                    <div class=\"col mx-3\">\r\n                         <div class=\"md-form\">\r\n                    <input required type=\"password\" id=\"materialRegisterFormPassword\" class=\"form-control\" aria-describedby=\"materialRegisterFormPasswordHelpBlock\" mdbInput ngModel name=\"password\" />\r\n                    <label for=\"materialRegisterFormPassword\">Password</label>\r\n                    \r\n                   \r\n                </div>\r\n                    </div>\r\n                    <div class=\"col mx-3\">\r\n                   <button mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect type=\"submit\" style=\"border-radius: 20px;\">\r\n                Update\r\n              </button>\r\n                    </div>\r\n                </div>\r\n               \r\n                <hr />\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- Grid column -->\r\n       \r\n        <!-- Grid column -->\r\n      </div>\r\n      <!-- Grid row -->\r\n    </div>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mdb-card class=\"mx-auto\" style=\"width: 350px; height: 500px; margin-top: 70px;\">\r\n    <mdb-card-header class=\"color-block blue-gradient white-text text-center py-4\">\r\n        <h5>\r\n            <strong> Sign up </strong>\r\n        </h5>\r\n    </mdb-card-header>\r\n    <!--Card content-->\r\n    <mdb-card-body class=\"px-lg-5 pt-0\">\r\n        <!-- Form -->\r\n\r\n        <form #submitForm=\"ngForm\" class=\"text-center\" (ngSubmit)=\"formSubmitted(submitForm)\" style=\"color: #9933CC;\">\r\n            <!-- User Name -->\r\n            <div class=\"md-form\">\r\n                <input required type=\"text\" id=\"materialRegisterFormPhone\" class=\"form-control\" aria-describedby=\"materialRegisterFormPhoneHelpBlock\" mdbInput ngModel name=\"username\" />\r\n                <label for=\"materialRegisterFormPhone\">Username</label>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                    <!-- First name -->\r\n                    <div class=\"md-form\">\r\n                        <input required name=\"firstname\" type=\"text\" id=\"materialRegisterFormFirstName\" class=\"form-control \" mdbInput ngModel/>\r\n                        <label for=\"materialRegisterFormFirstName\">First name</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <!-- Last name -->\r\n                    <div class=\"md-form\">\r\n                        <input required type=\"email\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput ngModel name=\"lastname\" />\r\n                        <label for=\"materialRegisterFormLastName\">Last name</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- E-mail -->\r\n            <div class=\"md-form mt-0\">\r\n                <input required type=\"email\" id=\"materialRegisterFormEmail\" class=\"form-control\" mdbInput ngModel name=\"email\" />\r\n                <label for=\"materialRegisterFormEmail\">E-mail</label>\r\n            </div>\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n                <input required type=\"password\" id=\"materialRegisterFormPassword\" class=\"form-control\" aria-describedby=\"materialRegisterFormPasswordHelpBlock\" mdbInput ngModel name=\"password\" />\r\n                <label for=\"materialRegisterFormPassword\">Password</label>\r\n                <small id=\"materialRegisterFormPasswordHelpBlock\" class=\"form-text text-muted mb-4\">\r\n          At least 8 characters\r\n        </small>\r\n            </div>\r\n\r\n            <!-- Sign up button -->\r\n            <button mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect type=\"submit\" style=\"border-radius: 20px;\">\r\n        Sign up\r\n      </button>\r\n            <hr />\r\n        </form>\r\n        <!-- Form -->\r\n    </mdb-card-body>\r\n</mdb-card>\r\n<!-- Material form register -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/chatpage/chatpage.component */
    "./src/app/components/chatpage/chatpage.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_notauth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards/notauth.guard */
    "./src/app/guards/notauth.guard.ts");
    /* harmony import */


    var _components_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/search-area/search-area.component */
    "./src/app/components/search-area/search-area.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");

    var routes = [{
      path: "",
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
      canActivate: [_guards_notauth_guard__WEBPACK_IMPORTED_MODULE_9__["NotAuthGuard"]]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      canActivate: [_guards_notauth_guard__WEBPACK_IMPORTED_MODULE_9__["NotAuthGuard"]]
    }, {
      path: "profile",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: "info",
      component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: "users/:username",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: "register",
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
      canActivate: [_guards_notauth_guard__WEBPACK_IMPORTED_MODULE_9__["NotAuthGuard"]]
    }, {
      path: "chatroom",
      component: _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_7__["ChatpageComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: "search",
      component: _components_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_10__["SearchAreaComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = "ng-nodes-web";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // console.log(!!this.authService.getToken(),this.authService.getToken())
          setTimeout(function () {
            return _this.authService.isAuthenticated.next(!!_this.authService.getToken());
          }, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent); //anything

    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/chatpage/chatpage.component */
    "./src/app/components/chatpage/chatpage.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_notauth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/notauth.guard */
    "./src/app/guards/notauth.guard.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _components_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/search-area/search-area.component */
    "./src/app/components/search-area/search-area.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], _components_chatpage_chatpage_component__WEBPACK_IMPORTED_MODULE_15__["ChatpageComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"], _components_search_area_search_area_component__WEBPACK_IMPORTED_MODULE_20__["SearchAreaComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(), angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__["FlashMessagesModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]],
      providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _guards_notauth_guard__WEBPACK_IMPORTED_MODULE_18__["NotAuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule); // back

    /***/
  },

  /***/
  "./src/app/components/chatpage/chatpage.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/chatpage/chatpage.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatpageChatpageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  height: 85vh;\n}\n\n.card-body {\n  background-color: 0;\n  height: 80%;\n}\n\n.white {\n  border-radius: 30px;\n}\n\n.white .friend-list {\n  background-color: 0;\n}\n\n.white .z-depth-1 {\n  background-color: 0;\n}\n\n.avatar {\n  width: 2.5em;\n}\n\nli .avatar {\n  height: 3.5em;\n  width: 3.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0cGFnZS9DOlxcVXNlcnNcXEFib2JrZXJcXERlc2t0b3BcXG5nLW5vZGVzLXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdHBhZ2VcXGNoYXRwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXRwYWdlL2NoYXRwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FER0E7RUFFQSxhQUFBO0VBQ0EsWUFBQTtBQ0RBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0cGFnZS9jaGF0cGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgICBoZWlnaHQ6IDgwJTsgIFxyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC5mcmllbmQtbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53aGl0ZSAuei1kZXB0aC0xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDIuNWVtOyAgICBcclxufVxyXG5cclxuXHJcbmxpIC5hdmF0YXIge1xyXG5cclxuaGVpZ2h0OiAzLjVlbTsgIFxyXG53aWR0aDogMy41ZW07ICBcclxufVxyXG4iLCIuY2FyZCB7XG4gIGhlaWdodDogODV2aDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG4gIGhlaWdodDogODAlO1xufVxuXG4ud2hpdGUge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuLndoaXRlIC5mcmllbmQtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG59XG5cbi53aGl0ZSAuei1kZXB0aC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogMDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAyLjVlbTtcbn1cblxubGkgLmF2YXRhciB7XG4gIGhlaWdodDogMy41ZW07XG4gIHdpZHRoOiAzLjVlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chatpage/chatpage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/chatpage/chatpage.component.ts ***!
    \***********************************************************/

  /*! exports provided: ChatpageComponent */

  /***/
  function srcAppComponentsChatpageChatpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatpageComponent", function () {
      return ChatpageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");
    /* harmony import */


    var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data/data.service */
    "./src/app/services/data/data.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__); // import { WebsocketService } from 'src/app/services/Websocket/websocket.service';


    var ChatpageComponent =
    /*#__PURE__*/
    function () {
      function ChatpageComponent(http, data) {
        _classCallCheck(this, ChatpageComponent);

        this.http = http;
        this.data = data;
        this.render = "friends";
        this.page = "chat";
        this.height = "60vh";
      }

      _createClass(ChatpageComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__("https://ng-nodes.herokuapp.com");
          this.innerWidth = window.innerWidth;
          this.socket.on("message", function (data) {
            if (!_this2.messages) _this2.messages = [];

            _this2.messages.push(data);
          });
          console.log(window.innerWidth);
          this.currentUserUsername = localStorage.getItem("username");
          this.http.get("/users/".concat(this.currentUserUsername)).subscribe(function (data) {
            _this2.currentUser = data["user"];
          });
          this.http.get("/messages/latest").subscribe(function (data) {
            _this2.latest = data;

            if (_this2.latest.length != 0) {
              _this2.currentReceiver = _this2.latest[0].sender.username === _this2.currentUserUsername ? _this2.latest[0].receiver._id : _this2.latest[0].sender._id;

              _this2.getMessages();
            }
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this3 = this;

          var scroll = document.getElementById("scrollable");
          console.log(scroll);

          if (this.render === "friends") {
            this.http.post("/users/".concat(this.currentReceiver, "/messages"), {
              content: this.content
            }).subscribe(function (data) {
              if (_this3.messages[0]) _this3.socket.emit("message", {
                message: data,
                id: _this3.messages[0]._id
              }); // this.messages.push(data);

              scroll.scrollTop = scroll.scrollHeight;
            });
          } else if (this.render === "chatrooms") {
            this.http.post("/groups/".concat(this.currentRoom._id), {
              content: this.content
            }).subscribe(function (data) {
              _this3.socket.emit("message", {
                message: data,
                id: _this3.currentRoom._id
              }); // this.messages.push(data);


              scroll.scrollTop = scroll.scrollHeight;
            });
          }

          this.content = "";
        }
      }, {
        key: "changeCurrent",
        value: function changeCurrent(message) {
          this.currentReceiver = this.receiverId(message);
          this.getMessages();
        }
      }, {
        key: "getChatroom",
        value: function getChatroom() {
          var _this4 = this;

          this.socket.emit("leaveRoom", this.currentRoom._id);
          this.messages = undefined;
          this.http.get("/groups/".concat(this.currentRoom._id)).subscribe(function (chatroom) {
            _this4.messages = chatroom;
            if (_this4.messages[0]) _this4.socket.emit("joinRoom", _this4.currentRoom._id);
          });
        }
      }, {
        key: "currentChatroom",
        value: function currentChatroom(chatroom) {
          this.currentRoom = chatroom;
          this.getChatroom();
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var _this5 = this;

          if (this.messages && this.messages[0]) this.socket.emit("leaveRoom", this.messages[0]._id);
          this.messages = undefined;

          if (this.currentReceiver) {
            this.http.get("/users/".concat(this.currentReceiver, "/messages")).subscribe(function (messages) {
              _this5.messages = messages;
              if (messages[0]) _this5.socket.emit("joinRoom", messages[0]._id);

              _this5.changeRender("friends");
            });
          } else {
            this.changeRender("friends");
          }

          this.height = "65vh";
        }
      }, {
        key: "receiverId",
        value: function receiverId(message) {
          return message.sender.username === this.currentUserUsername ? message.receiver._id : message.sender._id;
        }
      }, {
        key: "getChatrooms",
        value: function getChatrooms() {
          var _this6 = this;

          this.http.get("/groups").subscribe(function (data) {
            _this6.latestChatrooms = data;
            _this6.messages = null;

            if (_this6.latestChatrooms.length != 0) {
              _this6.currentRoom = _this6.latestChatrooms[0];

              _this6.getChatroom();
            }

            _this6.changeRender("chatrooms");
          });
          this.height = "60vh";
        }
      }, {
        key: "changeRender",
        value: function changeRender(str) {
          this.render = str;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.latest = null;
          this.socket.disconnect();
        }
      }, {
        key: "createChatroom",
        value: function createChatroom() {
          var _this7 = this;

          this.http.post("/groups", {
            name: this.chatroomName
          }).subscribe(function (chatroom) {
            _this7.latestChatrooms.push(chatroom);
          });
        }
      }, {
        key: "addMember",
        value: function addMember(user) {
          var _this8 = this;

          if (!this.toggle) {
            this.http.post("/groups/".concat(this.currentRoom._id, "/add"), {
              user: user._id
            }).subscribe(function (data) {
              if (data["success"]) _this8.currentRoom.users.push(user);
            });
          }
        }
      }, {
        key: "fetchFriends",
        value: function fetchFriends() {
          var _this9 = this;

          this.toggle = false;
          this.http.get("/groups/".concat(this.currentRoom._id, "/friendlist")).subscribe(function (friends) {
            console.log(friends);
            _this9.friends = friends;
          });
        }
      }, {
        key: "leaveChatroom",
        value: function leaveChatroom() {
          this.http.get("/groups/".concat(this.currentRoom._id, "/leave")).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "members",
        value: function members() {
          this.toggle = true;
          this.friends = this.currentRoom.users;
        }
      }, {
        key: "getTime",
        value: function getTime(id) {
          return this.data.calcTime(this.data.mongoIdToDate(id), null);
        }
      }]);

      return ChatpageComponent;
    }();

    ChatpageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], ChatpageComponent.prototype, "onResize", null);
    ChatpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-chatpage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chatpage/chatpage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatpage.component.scss */
      "./src/app/components/chatpage/chatpage.component.scss")).default]
    })], ChatpageComponent);
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/landing/landing.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center {\n  margin: 150px;\n}\n.text-center h1 {\n  font-weight: bold;\n}\n.text-center p {\n  font-family: \"Roboto\", sans-serif;\n}\n.text-center #btn:hover {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL0M6XFxVc2Vyc1xcQWJvYmtlclxcRGVza3RvcFxcbmctbm9kZXMtd2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYW5kaW5nXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsaUNBQUE7QUNFSjtBRENJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgbWFyZ2luOiAxNTBweDtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgI2J0biB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRleHQtY2VudGVyIHtcbiAgbWFyZ2luOiAxNTBweDtcbn1cbi50ZXh0LWNlbnRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHQtY2VudGVyIHAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi50ZXh0LWNlbnRlciAjYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent(http) {
        _classCallCheck(this, LandingComponent);

        this.http = http;
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ctorParameters = function () {
      return [{
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-landing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/components/landing/landing.component.scss")).default]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router, flashMessage) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
      }

      _createClass(LoginComponent, [{
        key: "onLogin",
        value: function onLogin(form) {
          var _this10 = this;

          var user = form.value;
          this.authService.authenticateUser(user).subscribe(function (data) {
            if (data["success"]) {
              _this10.authService.storeUserData(data["token"], data["user"]);

              _this10.authService.isAuthenticated.next(true);

              _this10.flashMessage.show("you're logged in", {
                cssClass: "alert-success",
                timeout: 5000
              });

              _this10.router.navigate(["/"]);
            } else {
              _this10.flashMessage.show(data["msg"], {
                cssClass: "alert-danger",
                timeout: 5000
              });

              _this10.router.navigate(["login"]);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::-webkit-input-placeholder {\n  /* Edge */\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxBYm9ia2VyXFxEZXNrdG9wXFxuZy1ub2Rlcy13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBOEIsU0FBQTtFQUMxQixZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEVkZ2UgKi9cbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.inputVal = "";
        this.isAuthenticated = false;
      }

      _createClass(NavbarComponent, [{
        key: "logOut",
        value: function logOut() {
          this.authService.logout();
        }
      }, {
        key: "assignVal",
        value: function assignVal() {
          if (/search/.test(location.href)) {
            this.authService.searchValSubject.next(this.inputVal);
          } else {
            this.authService.searchVal = this.inputVal;
            this.router.navigate(['/search']);
          }

          this.inputVal = "";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.authService.isAuthenticated.subscribe(function (bool) {
            _this11.isAuthenticated = bool;
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/components/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/profile/profile.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(http, activatedRoute, authService) {
        _classCallCheck(this, ProfileComponent);

        this.http = http;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.status = "";
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.activatedRoute.params.subscribe(function (param) {
            _this12.profile = !param.username;
            if (_this12.profile) _this12.$user = _this12.http.get("/users/".concat(_this12.authService.getUsername())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (one) {
              return one["user"];
            }));else {
              _this12.$user = _this12.http.get("/users/".concat(param.username)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (one) {
                return one["user"];
              }));
            }

            _this12.$user.subscribe(function (user) {
              _this12.id = user._id;
              if (user.areFriends) _this12.status = "Remove friend";else if (user.sentRequest) _this12.status = "Remove friend request";else if (user.gotrequest) _this12.status = "Accept friend request";else _this12.status = "Add friend";
            });
          });
        }
      }, {
        key: "handleFriendRequests",
        value: function handleFriendRequests() {
          var _this13 = this;

          if (this.status === "Remove friend request") {
            this.http.get("/users/".concat(this.id, "/removerequest")).subscribe(function (data) {
              if (data["success"]) _this13.status = "Add friend";
            });
          } else if (this.status === "Add friend") {
            this.http.get("/users/".concat(this.id, "/sendrequest")).subscribe(function (data) {
              if (data["success"]) _this13.status = "Remove friend request";
            });
          } else if (this.status === "Remove friend") {
            this.http.get("/users/".concat(this.id, "/removefriend")).subscribe(function (data) {
              if (data["success"]) _this13.status = "Add friend";
            });
          } else if (this.status === "Accept friend request") {
            this.http.get("/users/".concat(this.id, "/acceptrequest")).subscribe(function (data) {
              if (data["success"]) _this13.status = "Remove friend";
            });
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(value) {
          this.http.post("/users/".concat(this.id, "/messages"), {
            content: value
          }).subscribe(function (data) {});
        }
      }, {
        key: "getAllFreinds",
        value: function getAllFreinds() {
          var _this14 = this;

          this.friends = null;
          this.isRequest = false;
          this.http.get("/users/".concat(this.id, "/friends")).subscribe(function (data) {
            //logic of adding the message as a template to the chat
            _this14.friends = data;
          });
        }
      }, {
        key: "getAllRequests",
        value: function getAllRequests() {
          var _this15 = this;

          this.friends = null;
          this.isRequest = true;
          this.http.get("/requests").subscribe(function (data) {
            //logic of adding the message as a template to the cha
            //  console.log(data)
            _this15.friends = data.map(function (one) {
              return one["sender"];
            });
          });
        }
      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(id) {
          var _this16 = this;

          this.http.get("/users/".concat(id, "/acceptrequest")).subscribe(function (data) {
            if (data["success"]) {
              _this16.friends = _this16.friends.filter(function (item) {
                return item["_id"] !== id;
              });
            }
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/components/profile/profile.component.scss")).default]
    })], ProfileComponent); // this.friends.filter( item => item["_id"].toString() !== id.toString );

    /***/
  },

  /***/
  "./src/app/components/search-area/search-area.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/search-area/search-area.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchAreaSearchAreaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWFyZWEvc2VhcmNoLWFyZWEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/search-area/search-area.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/search-area/search-area.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchAreaComponent */

  /***/
  function srcAppComponentsSearchAreaSearchAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchAreaComponent", function () {
      return SearchAreaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");

    var SearchAreaComponent =
    /*#__PURE__*/
    function () {
      function SearchAreaComponent(authService, http) {
        _classCallCheck(this, SearchAreaComponent);

        this.authService = authService;
        this.http = http;
      }

      _createClass(SearchAreaComponent, [{
        key: "getUsers",
        value: function getUsers(keyword) {
          if (keyword) this.$users = this.http.get("/users/search", "?keyword=".concat(keyword));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.searchValSubject = this.authService.searchValSubject.subscribe(function (one) {
            _this17.getUsers(one);
          });
          this.getUsers(this.authService.searchVal);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.searchValSubject.unsubscribe();
        }
      }]);

      return SearchAreaComponent;
    }();

    SearchAreaComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    SearchAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-area',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-area.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-area/search-area.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-area.component.scss */
      "./src/app/components/search-area/search-area.component.scss")).default]
    })], SearchAreaComponent);
    /***/
  },

  /***/
  "./src/app/components/settings/settings.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/settings/settings.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/settings/settings.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/settings/settings.component.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/http/http.service */
    "./src/app/services/http/http.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(http, authService, validateService, flashMessage, router) {
        _classCallCheck(this, SettingsComponent);

        this.http = http;
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
      }

      _createClass(SettingsComponent, [{
        key: "formSubmitted",
        value: function formSubmitted(form) {
          var _this18 = this;

          var user = form.value;
          var email = form.value.email; // required fields

          if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("please fill in all fields", {
              cssClass: "alert-danger",
              timeout: 3000
            });
            return false;
          } // Validate email


          if (!this.validateService.validateEmail(email)) {
            this.flashMessage.show("please use a valid email", {
              cssClass: "alert-danger",
              timeout: 3000
            });
            return false;
          } // Register user


          this.authService.updateUserInfo(user).subscribe(function (data) {
            if (data["success"]) {
              _this18.flashMessage.show("Info Updated Successfully", {
                cssClass: "alert-success",
                timeout: 3000
              });

              _this18.router.navigate(["profile"]);
            } else {
              _this18.flashMessage.show(data["msg"], {
                cssClass: "alert-danger",
                timeout: 3000
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.$user = this.http.get("/users/".concat(this.authService.getUsername())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (one) {
            return one["user"];
          }));
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/components/settings/settings.component.scss")).default]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            return true;
          } else {
            this.router.navigate(['']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/notauth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/guards/notauth.guard.ts ***!
    \*****************************************/

  /*! exports provided: NotAuthGuard */

  /***/
  function srcAppGuardsNotauthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function () {
      return NotAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NotAuthGuard =
    /*#__PURE__*/
    function () {
      function NotAuthGuard(authService, router) {
        _classCallCheck(this, NotAuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(NotAuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['chatroom']);
          } else {
            return true;
          }
        }
      }]);

      return NotAuthGuard;
    }();

    NotAuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotAuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./http/http.service */
    "./src/app/services/http/http.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.searchVal = "";
        this.searchValSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(user) {
          return this.http.post("/users", user);
        }
      }, {
        key: "updateUserInfo",
        value: function updateUserInfo(user) {
          return this.http.patch("/users", user);
        }
      }, {
        key: "authenticateUser",
        value: function authenticateUser(user) {
          return this.http.post("/users/authenticate", user);
        }
      }, {
        key: "storeUserData",
        value: function storeUserData(token, user) {
          localStorage.setItem("id_token", token);
          localStorage.setItem("username", user["username"]);
          this.authToken = token;
          this.user = user;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!localStorage.getItem("id_token");
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.router.navigate([""]);
          this.isAuthenticated.next(false);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("id_token");
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return localStorage.getItem("username");
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/data/data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/data/data.service.ts ***!
    \***********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.times = {
          "min": 60,
          "hour": Math.pow(60, 2),
          "day": Math.pow(60, 2) * 24,
          "week": Math.pow(60, 2) * 24 * 7,
          "month": Math.pow(60, 2) * 24 * 7 * 4,
          "year": Math.pow(60, 2) * 24 * 7 * 4 * 12
        };
      }

      _createClass(DataService, [{
        key: "calcTime",
        value: function calcTime(date, max) {
          if (!date) return "";
          var d = new Date(date),
              diff = (Date.now() - d.getTime()) / 1000;

          if (diff < this.times.min) {
            return "now";
          } else if (diff < this.times.hour) {
            return Math.floor(diff / this.times.min) + " min ago";
          } else if (diff < this.times.day) {
            return Math.floor(diff / this.times.hour) + " hours ago";
          } else if (diff < this.times.week) {
            return Math.floor(diff / this.times.day) + " days ago";
          } else if (diff < this.times.month) {
            return Math.floor(diff / this.times.week) + " weeks ago";
          } else if (diff < this.times.year) {
            return Math.floor(diff / this.times.month) + " months ago";
          } //else over a year


          return "over a year ago";
        }
      }, {
        key: "mongoIdToDate",
        value: function mongoIdToDate(id) {
          var timestamp = id.substring(0, 8);
          return new Date(parseInt(timestamp, 16) * 1000);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/services/http/http.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/http/http.service.ts ***!
    \***********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.token = localStorage.getItem("id_token");
        this.headers = {
          Authorization: this.token
        };
        this.prod = "http://waar-nodes.herokuapp.com/api";
        this.dev = "http://127.0.0.1:7000/api";
      }

      _createClass(HttpService, [{
        key: "initialsGenerator",
        value: function initialsGenerator(name) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
          return "https://ui-avatars.com/api/?size=".concat(size, "&name=").concat(name, "&background=0fabcd&color=fff");
        }
      }, {
        key: "get",
        value: function get(route) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          // console.log(this.token);
          return this.http.get(this.dev + route + query, {
            headers: this.token ? this.headers : null
          });
        }
      }, {
        key: "post",
        value: function post(route, json) {
          return this.http.post(this.dev + route, json, {
            headers: this.token ? this.headers : null
          });
        }
      }, {
        key: "patch",
        value: function patch(route, json) {
          return this.http.patch(this.dev + route, json, {
            headers: this.token ? this.headers : null
          });
        }
      }, {
        key: "delete",
        value: function _delete(route) {
          return this.http.delete(this.dev + route, {
            headers: this.token ? this.headers : null
          });
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/services/validate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/validate.service.ts ***!
    \**********************************************/

  /*! exports provided: ValidateService */

  /***/
  function srcAppServicesValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidateService =
    /*#__PURE__*/
    function () {
      function ValidateService() {
        _classCallCheck(this, ValidateService);
      }

      _createClass(ValidateService, [{
        key: "validateRegister",
        value: function validateRegister(user) {
          console.log(user);
          return user.username || user.email || user.pasword || user.firsName || user.lastName;
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var emailChackingRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailChackingRe.test(email);
        }
      }]);

      return ValidateService;
    }();

    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ValidateService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(validateService, flashMessage, authService, router) {
        _classCallCheck(this, SignupComponent);

        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
      }

      _createClass(SignupComponent, [{
        key: "formSubmitted",
        value: function formSubmitted(form) {
          var _this19 = this;

          var user = form.value;
          var email = form.value.email; // required fields

          if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("please fill in all fields", {
              cssClass: "alert-danger",
              timeout: 3000
            });
            return false;
          } // Validate email


          if (!this.validateService.validateEmail(email)) {
            this.flashMessage.show("please use a valid email", {
              cssClass: "alert-danger",
              timeout: 3000
            });
            return false;
          } // Register user


          this.authService.registerUser(user).subscribe(function (data) {
            if (data["success"]) {
              _this19.flashMessage.show("Signed Up Successfully", {
                cssClass: "alert-success",
                timeout: 3000
              });

              _this19.router.navigate(["login"]);
            } else {
              _this19.flashMessage.show(data["msg"], {
                cssClass: "alert-danger",
                timeout: 3000
              });

              _this19.router.navigate(["register"]);
            } //this needs to be fixed, it need to check the status of the body if it's true or false, and respond to the user respectively
            // if (data["_body"].json()){
            // this.flashMessage.show("you are now registered and can log in", {
            //   cssClass: "alert-success",
            //   timeout: 3000
            // });
            //   this.router.navigate(["/login"]);
            // } else {
            // }

          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"]
      }, {
        type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Abobker\Desktop\ng-nodes-web\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map