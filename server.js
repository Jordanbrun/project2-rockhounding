const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const State = require("./models/state");


require('./db/db');
const seedScripting = require("./public/js/seedScript.js")

app.use(session({
	secret: 'This is our secret string for passwords. A ha ha.',
	resave: false,
	saveUninitialized: false
}))

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

const registrationController = require('./controllers/registration.js');
app.use('/registration', registrationController);

// here is the route to our homepage


const stateSeed = async () => {
    const states = await State.find({});
    console.log(states);
    console.log(states.length)
    if (states.length !== 0) {
        console.log("if");
        return;
    } else {

	    // const stateArr = [
	    // {name: "Alabama"},
	    // {name: "Alaska"},
	    // {name: "Arizona"},
	    // new State({name: "Arkansas"}),
	    // new State({name: "California"}),
	    // new State({name: "Colorado"}),
	    // new State({name: "Connecticut"}),
	    // new State({name: "Delaware"}),
	    // new State({name: "Florida"}),
	    // new State({name: "Geogia"}),
	    // new State({name: "Hawaii"}),
	    // new State({name: "Idaho"}),
	    // new State({name: "Illinois"}),
	    // new State({name: "Indiana"}),
	    // new State({name: "Iowa"}),
	    // new State({name: "Kansas"}),
	    // new State({name: "Kentucky"}),
	    // new State({name: "Louisiana"}),
	    // new State({name: "Maine"}),
	    // new State({name: "Maryland"}),
	    // new State({name: "Massachusetts"}),
	    // new State({name: "Michigan"}),
	    // new State({name: "Minnesota"}),
	    // new State({name: "Mississippi"}),
	    // new State({name: "Missouri"}),
	    // new State({name: "Montana"}),
	    // new State({name: "Nebraska"}),
	    // new State({name: "Nevada"}),
	    // new State({name: "New Hampshire"}),
	    // new State({name: "New Jersey"}),
	    // new State({name: "New Mexico"}),
	    // new State({name: "New York"}),
	    // new State({name: "North Carolina"}),
	    // new State({name: "North Dakota"}),
	    // new State({name: "Ohio"}),
	    // new State({name: "Oklahoma"}),
	    // new State({name: "Oregon"}),
	    // new State({name: "Pennsylvania"}),
	    // new State({name: "Rhode Island"}),
	    // new State({name: "South Carolina"}),
	    // new State({name: "South Dakota"}),
	    // new State({name: "Tennessee"}),
	    // new State({name: "Texas"}),
	    // new State({name: "Utah"}),
	    // new State({name: "Vermont"}),
	    // new State({name: "Virginia"}),
	    // new State({name: "Washington"}),
	    // new State({name: "West Virginia"}),
	    // new State({name: "Wisconsin"}),
	    // new State({name: "Wyoming"})
	    // ]

	      const stateArr = [
	    {name: "Alabama"},
	    {name: "Alaska"},
	    {name: "Arizona"},
	    {name: "Arkansas"},
	    {name: "California"},
	    {name: "Colorado"},
	    {name: "Connecticut"},
	    {name: "Delaware"},
	    {name: "Florida"},
	    {name: "Geogia"},
	    {name: "Hawaii"},
	    {name: "Idaho"},
	    {name: "Illinois"},
	    {name: "Indiana"},
	    {name: "Iowa"},
	    {name: "Kansas"},
	    {name: "Kentucky"},
	    {name: "Louisiana"},
	    {name: "Maine"},
	    {name: "Maryland"},
	    {name: "Massachusetts"},
	    {name: "Michigan"},
	    {name: "Minnesota"},
	    {name: "Mississippi"},
	    {name: "Missouri"},
	    {name: "Montana"},
	    {name: "Nebraska"},
	    {name: "Nevada"},
	    {name: "New Hampshire"},
	    {name: "New Jersey"},
	    {name: "New Mexico"},
	    {name: "New York"},
	    {name: "North Carolina"},
	    {name: "North Dakota"},
	    {name: "Ohio"},
	    {name: "Oklahoma"},
	    {name: "Oregon"},
	    {name: "Pennsylvania"},
	    {name: "Rhode Island"},
	    {name: "South Carolina"},
	    {name: "South Dakota"},
	    {name: "Tennessee"},
	    {name: "Texas"},
	    {name: "Utah"},
	    {name: "Vermont"},
	    {name: "Virginia"},
	    {name: "Washington"},
	    {name: "West Virginia"},
	    {name: "Wisconsin"},
	    {name: "Wyoming"}
	    ]

	    for (i=0; i<stateArr.length; i++) {
	    	try { 
	    		console.log(stateArr[i])

	    		const createdState = await State.create(stateArr[i]);
	    		console.log (createdState);
	    	} catch(err) {
	    		console.log(err);
	    	}
		}
	}
}


stateSeed();

app.get('/', (req, res) => {
	res.render('index.ejs');
});
//seedScripting.stateSeed();

app.listen(3000, () => {
	console.log('I can hear you');
});