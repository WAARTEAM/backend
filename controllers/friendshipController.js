const Friendship = require("../models/friendship.js");

exports.removeFriend = (req, res) => {
    const friend = req.params.id;
    Friendship.findOneAndDelete({
        $or: [
            { first: friend, second: req.user._id },
            { first: req.user._id, second: friend }
        ]
    }).then(data => {
        res.json({ success: true });
    });
};