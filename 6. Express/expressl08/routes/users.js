var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req,res,next){
  models.users.findOrCreate({
    where: {
      Username: req.body.username
    },
    defaults: {
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Email: req.body.email,
      Password: authService.hasPassword(req.body.password)
    }
  }).spread((result, created) => {
    if (created){
      res.send('Pass');
    } else {
      res.send('Failed');
    }
  });
});

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    } else {
      let passwordMatch = authService.comparePassword(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.send('Login successful');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});

router.get('/logout', (req, res, next) => {
  res.cookie('jwt', "", {expires: new Date(0)});
  res.send('Logged out');
});

router.get('/profile', (req, res, next) => {
  let token = req.cookies.jwt;

  if(token){
    authService.verifyUser(token).then(user =>{
      if (user)  {
        res.send(JSON.stringify(user));
      } else {
        res.status(401);
        res.send('Must be logged in');
      }
    });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
  
});

router.get('/profile/:id', authService.verifyUser, (req, res, next) => {

  if (req.params.id !== String(req.user.UserId)) {
    res.send('This is not your profile');
  } else {
    let status;
    if (req.user.Admin) {
      status = 'Admin';
    } else {
      status = 'Normal user';
    }

    res.render('profile', {
      FirstName: req.user.FirstName,
      LastName: req.user.LastName,
      Email: req.user.Email,
      UserId: req.user.UserId,
      Username: req.user.Username,
      Status: status
    });
  }
});

module.exports = router;
