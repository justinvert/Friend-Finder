var path = require("path");
var bodyParser = require("body-parser");
var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

      app.post('/api/friends', function(req, res) {
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++){
            
        }
        });
    

};

