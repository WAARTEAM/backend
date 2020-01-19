const Router = (module.exports = require("express").Router());
const userController = require("../controllers/userController.js");
const Request = require("../models/request.js");
const Message = require("../models/message.js");
const User = require("../models/user.js");
const Friendship = require("../models/friendship.js");
const AUTH = require("passport").authenticate("jwt", { session: false });
const messagesController = require('../controllers/messageController');
const friendsController = require('../controllers/friendshipController')
Router.route("/")
    .get(userController.getUsers)
    .post(userController.signUp);

Router.route("/authenticate")
    .post(userController.signIn);

Router.route("/:username")
    .get(AUTH, userController.getUser);

Router.route("/:id/sendrequest")
    .get(AUTH, userController.sendFriendRequest);

Router.route("/:id/removerequest")
    .get(AUTH, userController.removeFriendRequest);

Router.route("/:id/messages")
    .get(AUTH, messagesController.getAllMessages)
    .post(AUTH, messagesController.createMessage);

Router.route("/:id/removefriend").get(AUTH, friendsController.removeFriend);


Router.route("/:id/acceptrequest").get(AUTH, (req, res) => {
    const user = req.params.id;
    Friendship.create({ first: user, second: req.user._id }).then(data => {
        res.redirect(`/api/users/${user}/removerequest`);
    });
});

/**
 * @route /api/:id/friends GET
 * @description fetch all the friend of a specific user
 * @access private
 */
Router.route("/:id/friends").get(AUTH, userController.getFriends)