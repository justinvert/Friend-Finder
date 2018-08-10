var path = require("path");
var bodyParser = require("body-parser");
var friendsData = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

};

