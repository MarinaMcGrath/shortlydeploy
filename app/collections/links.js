// NOTE: this file is not needed when using MongoDB
var db = require('../config').db;
var Link = require('../models/link');

var Links = new db.Collection();

Links.model = Link;

module.exports = Links;