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