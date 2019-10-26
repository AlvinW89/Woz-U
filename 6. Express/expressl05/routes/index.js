var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/actors', function(req, res, next){
  models.actor.findAll({
    //No Code
  }).then(actorsFound => {
   let mappedActors = actorsFound.map(actor => ({
     ActorID: actor.actor_id,
     Name: `${actor.first_name}  ${actor.last_name}`
   }));
   res.send(JSON.stringify(mappedActors));
  });
});

router.get('/specificActor', function(req, res, next){
  models.actor.findOne({
    where: {actor_id: 12 }
  }).then(actor => {
    res.render('specificActor', {
      actor: actor
    });
  });
});


router.get('/actor/:id', function(req, res, next){
  let id = parseInt(req.params.id);
  models.actor.findOne({
    where: {
      actor_id: id
    }
  }).then(actor => {
    res.render('specificActor', {
      actor: actor
    });
  });
});

router.post('/actor', (req, res) => {
  models.actor
    .findOrCreate({
      where: {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/actors');
      } else {
        res.send('This actor already exists!');
      }
    });
});

module.exports = router;
