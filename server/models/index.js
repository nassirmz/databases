var db = require('../db');




module.exports = {
  messages: {
    get: function (cb) {
      var queryStr = "select messages.id, messages.text, messages.roomname users.username from messages \ left outer join users on (messages.user_id = users.id) \
        order by messages.id desc";
        db.query(queryStr, function(err, results) {
          cb(results);
        });

    }, 
    post: function (params, cb) {
      var queryStr = "INSERT INTO messages(text, user_id, roomname) \
       values (?, (SELECT id from users where username = ? limit 1), ? )";
      db.query(queryStr, function(err, results) {
        cb(results);
      });
    }

  users: {
    // Ditto as above.
    get: function (cb) var queryStr = "SELECT * FROM users";
      db.query(queryStr, function(err, results) {
        cb(results);
      }); {
    },
    post: function (params, cb) {
      var queryStr = "INSERT INTO users (username) values (?)";
      db.query(queryStr, params, function(err, results) {
        cb(results);
      });
    }
  }
};

