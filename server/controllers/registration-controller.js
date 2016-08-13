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
            return;
        }
        if (result > 0)console.log("user exists!");
        else {
            person.save(function (err, result) {
                //if (success.state == 'success')console.log("success");

                console.log("Callback: ");
                console.log(result.userName);

                if (err) res.send(500, err);
                else res.send(200, result);
            });
        }
    });
};

// module.exports.getAllData = function (req, res) {
//     Person.find({}, function (err, results) {
//         console.log(results.body);
//         res.json(results);
//     })
// };