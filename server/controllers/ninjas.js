const mongoose = require('mongoose')
const findOrCreate = require('mongoose-find-or-create');
var Ninja = require('../models/ninja')

// module.exports.index = function(req, res){
//     Ninja.find({}, function(err, ninjas){
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//             res.json({message: "Error", error: err})
//         }
//         else {
//             // respond with JSON
//             res.json({data: ninjas})
//         }
//     })
// }
module.exports.create = function(req, res) {
    Ninja.findOne({ninja: req.params.username}, (err, ninja) => {
        console.log(ninja)
        if (err) {
            res.json({message: 'error', error: err.message});
        }
        else {
            if (ninja !== null) {
                res.json({message: "success", data: ninja})
            }
            else {
                Ninja.create({
                    ninja: req.params.username,
                    total_gold: 0,
                    log: [],
                  }, (err, ninja) => {
                    res.json({message: "success", data: ninja})
                  })
            }
        }
    })
}
// module.exports.create = function(req, res) {
//     Ninja.findOrCreate({ninja: req.params.username}, req.body, (err, ninja) => {
//         console.log(ninja)
//         if (err) {
//             res.json({message: 'error', error: err.message});
//         }
//         else {
//             res.json({message: "success", data: ninja})
//         }
//     })
// }

// module.exports.create = function(req, res) {
//     var ninja = new Ninja({username: req.body.username, total_gold:0, log:[]})
//     ninja.save(function(err, newninja){
//         if(err){
//             console.log(err.message)
//             res.json(err.message)
//         } else {
//             res.json(newninja)
//         }
//     })
// }
module.exports.update = function(req, res){
    console.log(req.body)
    console.log(req.params.gameId)
    Ninja.findByIdAndUpdate(req.params.gameId, req.body, {new: true}, function(err, ninja){
        if (err) {
            res.json({message: 'error', error: err.message});
        }
        else {
            console.log(ninja)
            res.json({message: "success", data: ninja})
        }
    })
}
module.exports.clear = function(req, res){
    console.log("HI")
    Ninja.findOne({_id: req.params.gameId}, function(err, ninja){
        if (err) {
            console.log('hello')
            res.json(err.message)
        }
        ninja.total_gold = 0;
        ninja.log = []
        ninja.save(function(err){
            if (err) {
                res.json({message: 'error', error: err.message});
            }
            else {
                res.json({message: "success", data: ninja})
            }
        })
    })
}