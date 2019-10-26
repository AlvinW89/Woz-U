var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password!', //My password does not use 1
  database: 'sakila'
});

connection.connect(function(err){
  if(err){
    console.error(err.message);
    return;
  }
  console.log('DB Established');
});

router.get('/film', function(req, res, next){
  let filmQuery = `select * from film`;
  connection.query(filmQuery, function(err, result){
   if(err){
     res.render(err.message);
   } else {
     res.render('film', {films: result});
   }
  });
});

router.get('/film/:id', function(req, res, next){
  let id = parseInt(req.params.id);
  let actorQuery = `
  select film.title, actor.first_name, actor.last_name
  from film inner join film_actor ON film.film_id = film_actor.film_id
  inner join actor ON film_actor.actor_id = actor.actor_id
  where film.film_id = ${id}`;

  connection.query(actorQuery, function(err, result){
    if(err){
      res.render('error', {message: err.message});
    } else {
      console.log(result);
      res.render('filmDetail', {
        film_title: result[0].title, 
        films: result
      });
    }
  });
});

module.exports = router;
