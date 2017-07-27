const path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let db = mongoose.connect('mongodb://localhost:27017/system');
db.then(function() {
  let urlsSchema = new Schema({
    _id: Number,
    url: String,
    baseUrl: String,
    code: String,
    title: String,
    visits: Number,
    timestamps: { createdAt: 'created_at' } 
  });  
  
  let usersSchema = new Schema ({
    _id: Number,
    username: {
      type: String,
      unique: true
    },
    password: String,
    timestamps: { createdAt: 'created_at' } 
  });
});













// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
