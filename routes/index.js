var express = require('express');
var router = express.Router();
var control = require('../controller/user_control')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//insertuser
router.post('/insert',control.insertUser)

//getuser
router.get('/getusers',control.getUser)

//updateuser
router.post('/updateuser',control.updateUser)

//removeuser
router.post('/removeuser',control.deleteUser)

module.exports = router;

