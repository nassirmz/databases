var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err,results){
        res.json(results);
      });

    }, 
    post: function (req, res) {
      var params = [req.body[text], req.body[username], req.body[roomname]];
      models.messages.post(params, function(err,results){
        res.json(results);
      });

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get(function(err, results) {
      res.json(results);
    },
    post: function (req, res) {
      var params = [req.body[username];
      models.users.post(params, function(err,results){
        res.json(results);
      });
    }
  }
};

