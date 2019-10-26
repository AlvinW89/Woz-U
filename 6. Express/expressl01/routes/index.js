var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dogs', 
  users: [
    {
      name: 'Misty'
    },
    {
      name: 'Chaos'
    },
    {
      name: 'Teco'
    },
    {
      name: 'Coco'
    },
    {
      name: 'Ashley'
    },
    {
      name: 'Cali'
    }
  ]});
});

module.exports = router;
