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

// here is the route to our homepage

app.get('/', (req, res) => {
	res.render('index.ejs');
});







app.listen(3000, () => {
	console.log('I can hear you');
});