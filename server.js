const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express(),
    port = process.env.PORT || 7000,
    jwt = require('jsonwebtoken'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJWT = require('passport-jwt').ExtractJwt,
    passport = require('passport'),
    User = require("./models/user.js"),
    Friendship = require("./models/friendship.js"),
    Message = require("./models/message.js"),
    Request = require("./models/request.js"),
    Group = require("./models/group.js"),
    users = require("./routes/users.js"),
    requests = require("./routes/requests.js"),
    messages = require("./routes/messages.js"),
    friends = require("./routes/friends.js"),
    config = require("./config.js"),
    socket = require("socket.io"),
    cors = require("cors"),
    groups = require('./routes/groups'),
    path = require('path');

mongoose.connect("mongodb+srv://NG-NODES-ADMIN:AMSsew2Tri5IakWd@ng-nodes-cluster.dtprp.mongodb.net/nodesWeb?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("workin properly"))
mongoose.connection.once("error", () => console.log("Error"))

const publicPath = path.join(__dirname, 'dist', 'ng-nodes-web');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());
passport.use(new JwtStrategy({

    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: config.secret
}, function(jwt_payload, done) {
    User.findById(jwt_payload._id, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
app.use("/api/users", users);
app.use("/api/requests", requests);
app.use("/api/friends", friends);
app.use('/api/groups', groups);
app.use('/api/messages', messages);
app.get('/api/verifytoken', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ success: true })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


var io = socket(app.listen(port, () => console.log(`listening on http://localhost:${port}`)));

io.on("connection", connect => {
    console.log("connection is made")

    connect.on("joinRoom", data => {
        console.log(data)
        connect.join(data)
    })
    connect.on("leaveRoom", data => {

        connect.leave(data)
    })
    connect.on("message", data => {
        console.log(data)
        io.in(data.id).emit("message", data.message)
    })
})
