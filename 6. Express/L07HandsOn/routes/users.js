var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');
var passport = require('../services/passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.user.findAll({}).then(usersFound =>{
    res.render('users', {
      users: usersFound
    });
  });
});


//User Signup
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
  
router.post('/signup', function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: req.body.password,
        Admin: JSON.parse(req.body.admin)
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('login'); 
      } else {
        res.send('This user already exists');
      }
    });
});



//User login
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/users/login'
  }),
  function (req, res, next) {
    res.redirect('profile');
});


//User Profile
router.get('/profile', function (req, res, next) {
  if (req.user) {
    models.users
      .findByPk(parseInt(req.user.UserId))
      .then(user => {
        if (user) {
          res.render('profile', {
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            Username: user.Username,
            Admin: user.Admin
          });
        } else {
          res.send('User not found');
        }
      });
  } else {
    res.redirect('/users/login');
  }
});

module.exports = router;
