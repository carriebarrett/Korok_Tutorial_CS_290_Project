// Carrie Barrett
// CS 290

// start with code from lecture
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5355);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// my code below
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('home');
  
  // slideshow is similar to https://www.w3schools.com/w3css/w3css_slideshow.asp
  var slideshowIndex = 0;
  showImg(slideshowIndex);
  
  function incrSlideshow(change) {
    showImg(slideshowIndex += change);// shows the image with the next index
  }
  
  function showImg(index) {
    var i;
    var slideList = document.getElementsByClassName("mySlides");
    if (n > slideList.length) {
	  slideshowIndex = 1;
	}
    if (n < 0) {
	  slideIndex = slideList.length - 1;
	}
    for (i = 0; i < slideList.length; i++) {
      slideList[i].style.display = "none";
    }
    slideList[slideshowIndex].style.display = "block";
  }
  
});

app.get('/fruit_trees', function(req, res) {
  res.render('fruit_trees');
});

app.get('/petroglyphs', function(req, res) {
  res.render('petroglyphs');
});

app.get('/rock_fingers', function(req, res) {
  res.render('rock_fingers');
});

// code from lecture continues
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});