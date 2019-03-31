/**
 * 用户信息
 */
var mongoose = require('./mongoose.js'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username : { type: String },
  userpassorwd: {type: String},
});

module.exports = mongoose.model('User',UserSchema);
