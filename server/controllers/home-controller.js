/**
 * Created by GODFATHER on 12-08-16.
 */

var Profile = require('../models/person');

module.exports.getProfile = function (req, res) {
    console.log(req.query.userName);
    Profile.find(req.query, function (err, result) {
        console.log(result);
        if (err) {
            return res.json({'status': '0', 'result': 'error retrieving profile'});
        }
        res.json([{'status': '1', 'result': result}]);
    })
};