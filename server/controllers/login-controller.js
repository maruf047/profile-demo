/**
 * Created by GODFATHER on 12-08-16.
 */


var AuthenticationInformation = require('../models/person');

module.exports.authenticate = function (params, res) {
    console.log("authentication req");
    var authenticationInformation = new AuthenticationInformation(params.body);
    authenticationInformation.find({'userName': person.userName}, {'passWord': 1}, function (err, docs) {
        console.log(docs.body);
    });
};