var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/actors', function(req, res, next){
  models.actor.findAll({
    attributes: ['actor_id', 'first_name', 'last_name'],
    include: [{
      attributes: ['film_id', 'title', 'description', 'rental_rate', 'rating'],
      model: models.film}]}).then(actorsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(actorsFound));
    });
});

router.get('/actors/:id', function(req, res, next){
  models.actor.findByPk(parseInt(req.params.id), {
    include: [{model: models.film}]
  }).then(actorFound => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(actorFound));
  });
});

router.post('/actors', function(req, res, next){
  models.actor.findOrCreate({
    where: { 
      first_name: req.body.first_name, 
      last_name: req.body.last_name 
    }
  }).spread(function(result, created) {
    if (created) {
      res.redirect('/actors/' + result.actor_id);
    } else {
      res.status(400);
      res.send('Actor already exists');
    }
  });
});

router.put("/actors/:id", function (req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .update(req.body, { where: { actor_id: actorId } })
    .then(result => res.redirect('/actors/' + actorId))
    .catch(err => {
      res.status(400);
      res.send("There was a problem updating the actor.  Please check the actor information.");
    });
});

router.delete("/actors/:id", function (req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .destroy({
      where: { actor_id: actorId }
    })
    .then(result => res.redirect('/actors'))
    .catch(err => { 
      res.status(400); 
      res.send("There was a problem deleting the actor. Please make sure you are specifying the correct id."); 
    }
);
});

module.exports = router;
