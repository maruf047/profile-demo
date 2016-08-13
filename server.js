var express = require('express'),
    app = express();
var expressControllers = require('express-controller');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/profile-demo');
require('./server/models/person');

var loginController = require('./server/controllers/login-controller');
var registrationController = require('./server/controllers/registration-controller');
var homeController = require('./server/controllers/home-controller');

router.use(bodyParser.json());

app.use('/', router);
app.use('/login', router);
app.use('/registration', router);
app.use('/home', router);

expressControllers
    .setDirectory(__dirname + '/client/js/controllers')
    .bind(router);

router.use('/js', express.static(__dirname + '/client/js'));
router.use('/views', express.static(__dirname + '/client/views'));

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

router.get('/api/get-profile', homeController.getProfile);
router.get('/api/login', loginController.authenticate);
// router.get('/api/person-register', registrationController.getAllData);
router.post('/api/person-register', registrationController.registerPerson);

app.listen(3000, function () {
    console.log('Server listening ...');
});