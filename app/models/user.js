var db = require('../config').db;
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var User = require('../config').User;


var user = new User({username: "marina", password: 'hi123'});

user.save()
.then(user => console.log(user, 'user saved'))
.catch(err => console.error(err, 'err caught'));

user.remove()
.then(user => console.log(user, 'user removed'))
.catch(err => console.error(err));



// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });

// module.exports = User;
