var mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
  location: String,
	status: String,
  date: String
});

module.exports = mongoose.model('Criminal', CriminalSchema);

