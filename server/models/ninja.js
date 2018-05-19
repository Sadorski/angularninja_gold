var mongoose = require('mongoose')
const findOrCreate = require('mongoose-find-or-create');

var NinjaSchema = new mongoose.Schema({
    ninja:  { type: String, required: true, unique: true, minlength: 2},
    total_gold:  { type: Number, required: true},
    log:  { type: Array }
}, {timestamps: true });
NinjaSchema.plugin(findOrCreate)
module.exports = mongoose.model('Ninja', NinjaSchema); 
var Ninja = mongoose.model('Ninja')