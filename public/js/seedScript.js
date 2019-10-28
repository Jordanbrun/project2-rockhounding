const State = require("../../models/state");
const Rock = require("../../models/rock");
const express = require("express");

const app = express();

const stateSeed = async () => {
    const states = await State.find({}).exec();
    if (states.length !== 0) {
        return;
    }

    stateArr = [
    new State({name: "Alabama"}),
    new State({name: "Alaska"}),
    new State({name: "Arizona"}),
    new State({name: "Arkansas"}),
    new State({name: "California"}),
    new State({name: "Colorado"}),
    new State({name: "Connecticut"}),
    new State({name: "Delaware"}),
    new State({name: "Florida"}),
    new State({name: "Geogia"}),
    new State({name: "Hawaii"}),
    new State({name: "Idaho"}),
    new State({name: "Illinois"}),
    new State({name: "Indiana"}),
    new State({name: "Iowa"}),
    new State({name: "Kansas"}),
    new State({name: "Kentucky"}),
    new State({name: "Louisiana"}),
    new State({name: "Maine"}),
    new State({name: "Maryland"}),
    new State({name: "Massachusetts"}),
    new State({name: "Michigan"}),
    new State({name: "Minnesota"}),
    new State({name: "Mississippi"}),
    new State({name: "Missouri"}),
    new State({name: "Montana"}),
    new State({name: "Nebraska"}),
    new State({name: "Nevada"}),
    new State({name: "New Hampshire"}),
    new State({name: "New Jersey"}),
    new State({name: "New Mexico"}),
    new State({name: "New York"}),
    new State({name: "North Carolina"}),
    new State({name: "North Dakota"}),
    new State({name: "Ohio"}),
    new State({name: "Oklahoma"}),
    new State({name: "Oregon"}),
    new State({name: "Pennsylvania"}),
    new State({name: "Rhode Island"}),
    new State({name: "South Carolina"}),
    new State({name: "South Dakota"}),
    new State({name: "Tennessee"}),
    new State({name: "Texas"}),
    new State({name: "Utah"}),
    new State({name: "Vermont"}),
    new State({name: "Virginia"}),
    new State({name: "Washington"}),
    new State({name: "West Virginia"}),
    new State({name: "Wisconsin"}),
    new State({name: "Wyoming"})
    ]

    for (i=0; i<stateArr.length; i++) {
    	try { 
    		console.log(stateArr[i])
    		await stateArr[i].save()
    	} catch(err) {
    		console.log(err);
    	}
	}
}

module.exports = stateSeed;
