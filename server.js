const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const session = require('session');

require('./db/db');

// app.use(session({
// 	secret: 'This is our secret string for passwords. A ha ha.'
// 	resave: false,
// 	saveUnitilizaed: false;
// }))

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

// here is the route to our homepage

app.get('/', (req, res) => {
	res.render('index.ejs');
});







app.listen(3000, () => {
	console.log('I can hear you');
});