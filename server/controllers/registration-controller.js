/**
 * Created by GODFATHER on 09-08-16.
 */

var Person = require('../models/person');

module.exports.registerPerson = function (req, res) {
    var person = new Person(req.body);
    console.log("Request: ");
    console.log(req.body.userName);
    console.log("\n");
    console.log(res.body);
    person.save(function (err, result) {
        console.log("Callback: ");
        console.log(result.body);
    });
};