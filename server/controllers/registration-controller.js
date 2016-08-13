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
        //if (success.state == 'success')console.log("success");

        console.log("Callback: ");
        console.log(result.body);

        if (err) res.send(500, err);
        else res.send(200, result);
    });
};

module.exports.getAllData = function (req, res) {
    Person.find({}, function (err, results) {
        console.log(results.body);
        res.json(results);
    })
};