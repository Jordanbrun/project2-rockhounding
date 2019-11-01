const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();
require('./db/db');


app.use(session({
	secret: 'This is our secret string for passwords. A ha ha.',
	resave: false,
	saveUninitialized: false
}));

app.use(express.static('public'));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const statesController = require('./controllers/states.js');
app.use('/states', statesController);

const postsController = require('./controllers/posts.js');
app.use('/posts', postsController);

const rocksController = require('./controllers/rocks.js');
app.use('/rocks', rocksController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const registrationController = require("./controllers/registration.js");
app.use("/registration", registrationController);


// home page

app.get('/', (req, res) => {
	console.log(req.session, " Session in homepage");
	res.render('index.ejs', {
	logOut: req.session.logOutMsg, 
	loggedIn: req.session.logged,
    message: req.session.message});
});

app.get('/about', (req, res) => {

	res.render('about.ejs');
});


app.listen(process.env.PORT, () => {
  console.log('listening on port 3000');

});

