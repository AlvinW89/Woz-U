var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');
const sequelize = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/category', function(req, res, next){
  models.category.findAll({
    // Empty Block
  }).then(foundCategories =>{
    res.render('category', {
      category: foundCategories
    });
  });
});

router.post('/category', (req, res) =>{
  models.category.findOrCreate({
    where: {
      name: req.body.name,
      default_price: req.body.price 
    }
  }).spread(function(result, created){
    if(created){
      res.redirect('/category');
    } else {
      res.send('Already present');
    }
  });
});

router.get('/category/:id', function(req, res, next){
  let id = parseInt(req.params.id);
  models.category.findOne({
    where: {
      category_id: id
    }
  }).then(category => {
    res.render('categoryId', {
      category: category
    });
  });
});

module.exports = router;
