// Initial libraries declarations
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
var app = express();
const router = express.Router();

// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Load Routes
const recipes = require('./routes/recipes');
const recipes_api = require('./routes/recipes_api');

// configure app for logging
app.use(morgan('dev')); // logs requests to the console

var port = process.env.PORT || 3000; // Application port

router.get('/index.html', (req, res) => {
    res.redirect('/recipes');
});

router.get('/', (req, res) => {
    res.redirect('/recipes');
});

router.get('/recipes.html', (req, res) => {
    res.redirect('/recipes');
});

app.use('/', router);
app.use('/recipes', recipes);
app.use('/api', recipes_api);

// Start Server
app.listen(port);
console.log(`To Test: 
http://localhost:3000/recipes
http://localhost:3000/recipes?ingredient=Basil
http://localhost:3000/recipes?ingredient=Basil,Cumin

To get just JSON data from api: 
http://localhost:3000/api
http://localhost:3000/api?ingredient=Basil
http://localhost:3000/api?ingredient=Basil,Cumin`);

module.exports = app;