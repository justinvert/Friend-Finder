var path = require("path");
var bodyParser = require("body-parser");
var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post('/api/friends', function(req, res) {
          

        var userData = req.body;
        console.log(userData)
        var userScores = userData.scores;
        console.log(userScores)
        var totalDifference = 0;
//Loop through all of the users in the friends array
      });
    }