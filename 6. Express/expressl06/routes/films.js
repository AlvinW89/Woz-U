const express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function(req, res, next){
    models.film.findAll({
        attributes: ['film_id', 'title', 'description', 'rental_rate', 'rating']
    }).then(filmsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmsFound));
    });
});

router.get('/:id', function(req, res, next){
    models.film.findByPk(parseInt(req.params.id),{

    }).then(filmFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmFound));
    });
});

router.put('/:id', function(req, res, next){
    var id = parseInt(req.params.id);
    models.film.update(req.body, { where: {film_id: id}})
               .then(result => res.redirect('/films'))
               .catch(err => {
                   res.status(400);
                   res.send("There was a problem updating title");
               });
            });

module.exports = router;