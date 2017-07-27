var db = require('../config').db;
var crypto = require('crypto');
var Link = require('../config').Link;


var link = new Link();


link.save()
  .then(link => console.log(link, 'in save'))
  .catch(err => console.log(err));

link.remove()
  .then(link => console.log(link, 'in err'))
  .catch(err => console.log(err));
// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   },
//   remove: function(url) {
    
  // }
// });

// module.exports = link;

//  url: String,
//   baseUrl: String,
//   code: String,
//   title: String,
//   visits: Number,