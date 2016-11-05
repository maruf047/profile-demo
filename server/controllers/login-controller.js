/**
 * Created by GODFATHER on 12-08-16.
 */


var AuthenticationInformation = require('../models/person');


module.exports.authenticate = function (req, res) {
    console.log("authentication req: ");
    var params = {'userName': req.body.userName};
    console.log(params);
    AuthenticationInformation.count(params, function (err, result) {
        if (err) {
            return res.json({'status': '401', 'message': 'Error occurred, Please try again!'});
        }
        console.log(result);
        if (result == 0) return res.json({'status': '401', 'message': 'No such user!'});
        AuthenticationInformation.find({'userName': req.query.userName}, {'passWord': 1}, function (err, results) {
            if (err != null) {
                console.log(err.body);
                res.json({'status': '401', 'message': err.body});
            }
            if (req.query.passWord == results.passWord) {
                console.log("pw matched");
                // var session = req.session;
                // session.name = req.query.userName;
                res.json({'status': '200', 'userName': req.body.userName});
            } else {
                res.json({'status': '401', 'message': 'Your credintials did not match!'});
            }
        });
    });
};