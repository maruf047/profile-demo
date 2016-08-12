var express = require('express'),
    app = express();
var expressControllers = require('express-controller');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var loginController = require('./server/controllers/login-controller');
var registrationController = require('./server/controllers/registration-controller');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/profile-demo');

app.use('/', router);
app.use('/login', router);
app.use('/registration', router);
app.use('/home', router);

router.use(bodyParser.json());

expressControllers
    .setDirectory(__dirname + '/client/js/controllers')
    .bind(router);

router.use('/js', express.static(__dirname + '/client/js'));
router.use('/views', express.static(__dirname + '/client/views'));

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

router.get('/api/login', loginController.authenticate);
router.post('/api/person-register', registrationController.registerPerson);

app.listen(3000, function () {
    console.log('Server listening to port 3000 ...');
});