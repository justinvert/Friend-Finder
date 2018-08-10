var path = require("path");
var bodyParser = require("body-parser");
var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post('/api/friends', function(req, res) {
          
        var userData = req.body;
        var friendMatch = {
            name: "",
            photo: "",
            difference: 100000000
        };
        // console.log(userData);
        // console.log(friendMatch);
        var userScores = userData.scores;
        // console.log(userScores);
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++){
            var friendList = friends[i].scores;
            for (var j = 0; j < userScores.length; j++) {
                var friendScoreNew = friendList[j];
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendScoreNew));

        }

        if (totalDifference <= friendMatch.difference) {
            friendMatch.name = friends[i].name;
            friendMatch.photo = friends[i].photo;
            friendMatch.difference = totalDifference;
          }
        }
        friends.push(userData);
        res.json(friendMatch);
        });
    };
    
