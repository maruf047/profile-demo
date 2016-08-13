/**
 * Created by GODFATHER on 12-08-16.
 */

var Person = require('../models/person');

module.exports.getProfile = function (req, res) {
    Person.find({} , function (err, result) {
        console.log(result);
        if(err) return res.send(500,err);
        return res.json(result);
    })
};