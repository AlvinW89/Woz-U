var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.user && req.user.Admin) { // Check to make sure user is Admin
    models.users
      .findAll({})
      .then(users => res.render("users", { users: users })); // Finds then list all users
  } else {
    res.redirect("users/login"); // Redirects to unautherised access page
  }
});

//Signup
router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) =>{
  models.users.findOrCreate({ // Check for user or creates a new user
    where: {Username:req.body.username},
  defaults: {
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    Email: req.body.email,
    Password: authService.hashPassword(req.body.password),
    Admin: req.body.admin
  }}).spread((result, create) => {
    if (create) { // Check if user already made
      res.redirect('login'); //Redirect to login if created
    } else {
      res.send('This user already exists');
    }
  });
});

//Login
router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    if (!user) {
      console.send('User not found');
      return res.status(401).json({
        message:"Login Failed"
      });
    } else {
      let passwordMatch = authService.comparePassword(req.body.password, user.Password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        //res.send('Success');
        res.redirect("profile");
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});


//Profile
router.get("/profile", function(req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token).then(user => {
      if (user) {
        models.users
          .findAll({
            where: { UserId: user.UserId },
            include: [{ model: models.posts }]
          })
          .then(result => {
            console.log(result);
            res.render("profile", { user: result[0] });
          });
      } else {
        res.status(401);
        res.send("Invalid authentication token");
      }
    });
  } else {
    res.status(401);
    res.send("Must be logged in");
  }
});


//Lougout
router.get('/logout', (req, res, next) => {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged out');
});


//List posts
router.get('/posts', (req, res, next) => {
  models.posts.findAll({ 
    include: [{
    model: models.users,
    attributes: ['FirstName', 'LastName', 'UserId']
  }]}).then(posts => res.render('posts', {posts: posts}));
});

//Delete posts
router.delete('/delete/:id', (req, res, next) => {

  let id = parseInt(req.params.id);
  models.posts.destroy({
    where: {PostId: id}
  }).then(result = res.redirect('posts')).catch(err => {
    res.status(400);
    res.send('Issue removing post');
  })
});



module.exports = router;
