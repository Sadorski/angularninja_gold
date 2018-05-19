const mongoose = require('mongoose')
module.exports = function(){
    mongoose.connect('mongodb://localhost/ninja_gold');
}
