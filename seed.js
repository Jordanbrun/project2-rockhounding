const State = require("./models/state")
const Rock = require("./models/rock");
const express = require("express");

require("./db/db")

const stateSeed = async () => {
    const states = await State.find({});
    console.log(states);
    console.log(states.length)
    if (states.length !== 0) {
        return true;
    } else {

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
	    console.log(stateArr);
	    await State.create(stateArr);
	    
	}
}


const coloradoRockSeed = async () => {
	const colorado = await State.findOne({"name": "Colorado"});
    if (colorado.rocks !== "undefined" && colorado.rocks.length > 0){
        return;
    } else {

	    const coloradoRockArr = [
	    {name: "Petrified Wood",
	     IMG: "petrified.jpg"}, 
	    {name: "Aquamarine",
	     IMG: "aquamarine.jpg"},
	    {name: "Rhodochrosite",
	     IMG: "rhodochrosite.jpg"},
	    {name: "Topaz",
	     IMG: "topaz.jpg"},
	    {name: "Amazonite",
	     IMG: "amazonite.jpg"},
	    {name: "Smoky Quartz",
	     IMG: "smokey-quartz.jpg"}
	    ]
	    console.log(colorado.rocks);

	    console.log(coloradoRockArr);

	     await Rock.create(coloradoRockArr, async (err, createdRocks) => {
	    	if (err) {
	    		console.log(err)
	    	} else {
	    		for (let i=0 ; i<createdRocks.length; i++) {
	    			console.log(createdRocks[i]);
	    			colorado.rocks.push(createdRocks[i])
	    			await colorado.save();
	    			await createdRocks[i].save();
	    		}

	    		for (let i=0; i<createdRocks.length; i++) {
	    			createdRocks[i].states.push(colorado);
	    			await createdRocks[i].save();
	    			console.log(createdRocks[i]);
	    		}

	    	}
	    })
	    
	}
}

const seedAll = async () =>
{
	await stateSeed();
	await coloradoRockSeed();
}

seedAll();



