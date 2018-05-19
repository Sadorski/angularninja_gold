const mongoose = require('mongoose')
var Ninja = require('../models/ninja')
const ninjas = require('../controllers/ninjas')

module.exports = function(app){
    // app.get('/ninja_gold', ninjas.index)
    
    app.post('/ninja_gold/:username', ninjas.create)

    app.put('/ninja_gold/:gameId', ninjas.update)

    app.put('/ninja_gold/:gameId/clear', ninjas.clear)

}
