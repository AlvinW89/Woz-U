var express = require('express');
var router = express.Router();

var stories = require('../models/storyLine');
let storyParts = stories.story.find( parts => {
  return parts.storyPart; 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The story' });
});

router.get('/beginning', function(req, res, next) {
  storyParts;
  res.render('beginning', { storyParts });
});

router.get('/middle', function(req, res, next) {
  storyParts;
  let storyPartMiddle = stories.story.find( parts => {
    return parts.storyPart === 'middle'; 
  });
  res.render('middle', { storyParts, storyPartMiddle });
});

router.get('/end', function(req, res, next) {
  storyParts;
  let storyPartEnd = stories.story.find( parts => {
    return parts.storyPart === 'end'; 
  });
  res.render('end', { storyParts , storyPartEnd});
});

module.exports = router;      
