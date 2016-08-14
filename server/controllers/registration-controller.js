/**
 * Created by GODFATHER on 09-08-16.
 */

var Person = require('../models/person');

module.exports.registerPerson = function (req, res) {
    var person = new Person(req.body);
    console.log("Request: ");
    console.log(req.body.userName);

    Person.count({'userName': req.body.userName}, function (err, result) {
        if (err) {
            return res.json({'status': '401', 'message': 'Could not complete registration'});
        }
        if (result > 0) {
            console.log("user exists!");
            res.json({'status': '401', 'message': 'User already exists.'});
        }
        else {
            person.save(function (err, result) {
                console.log("Callback: ");
                console.log(result.userName);

                if (err) res.json({'status': '401', 'message': 'Could not complete registration'});
                else res.json({'status': '201', 'message': 'Registration Successful'});
            });
        }
    });
};