/**
 * Created by GODFATHER on 09-08-16.
 */


//schema: db.people.find()

var mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
    userName: String,
    passWord: String,
    name: String,
    dateOfBirth: String,
    sex: String,
    aboutSelf: String
});