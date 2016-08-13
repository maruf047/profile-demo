/**
 * Created by GODFATHER on 12-08-16.
 */


var AuthenticationInformation = require('../models/person');


module.exports.authenticate = function (req, res) {
    console.log("authentication req: ");
    console.log(req.query.userName);

    // AuthenticationInformation.find({}, function (err, result) {
    //     console.log("DB returned: ");
    //     console.log(result);
    //     res.json(result);
    // });

    AuthenticationInformation.find({'userName': req.query.userName}, {'passWord': 1}, function (err, results) {
        if (err != null) {
            console.log(err.body);
            return res.send(500, err);
        }
        console.log("DB returned: ");
        console.log(results[0].passWord);
        //TODO handle status according to login and redirect, take help from Shamim vai
        if (results[0].passWord == req.query.passWord) {
            return res.send(200, results);
        }
        // res.json(results);
    });

    // AuthenticationInformation.find({}, function (err, results) {
    //     console.log(results.body);
    //     res.json(results);
    // })
};