const express = require('express');
const router = express.Router();
const Reviews = require('./models/reviews');
const Articles = require('./models/articles');

router.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

router.get('/index.html',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

router.get('/rev.html',function(req, res){
  res.sendFile(__dirname + '/rev.html');
});

router.get('/admin.html',function(req, res){
  res.sendFile(__dirname + '/admin.html');
});

router.get('/news.html',function(req, res){
  res.sendFile(__dirname + '/news.html');
});

router.get('/plan.html',function(req, res){
  res.sendFile(__dirname + '/plan.html');
});


//get a list of reviews from database
router.get('/reviews', function(req, res){
	Reviews.find({}).then(function(reviews){
		res.send(reviews);
	});
});

//add a new revies to database
router.post('/reviews', function(req,res){
	Reviews.create(req.body).then(function(review){
			res.send(review);
	});
});

router.get('/articles', function(req, res){
	Articles.find({}).then(function(articles){
		res.send(articles);
	}, function(err){
		console.log("Error");
	});
});

router.post('/articles', function(req,res){
	Articles.create(req.body).then(function(articles){
			res.send(articles);
	});
});

module.exports = router;