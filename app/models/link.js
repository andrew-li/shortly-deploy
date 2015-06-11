// require mongoose
var mongoose = require('mongoose');
var crypto = require('crypto');

var linkSchema = new mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0}
});

linkSchema.methods.initialize = function(){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
};

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
