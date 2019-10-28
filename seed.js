const State = require("./models/state")
//const Rock = require("../../models/rock");
const express = require("express");

require("./db/db")

const stateSeed = async () => {
    const states = await State.find({});
    console.log(states);
    console.log(states.length)
    if (states.length !== 0) {
        console.log("if");
        return;
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

	    // console.log(stateArr);
	    // const createdState = await State.create(stateArr[0]);
	    // console.log (createdState);
	    await State.create(stateArr, (err) => {
	    	if (err) {
	    		console.log(err)
	    	} else {
	    		for (let i=1 ; i<arguments.length; i++) {
	    			console.log(arguments[i]);
	    		}
	    	}
	    })
	    

	 //    for (i=0; i<stateArr.length; i++) {
	 //    	try { 
	 //    		console.log(stateArr[i])

	 //    		const createdState = await State.create(stateArr[i]);
	 //    		console.log (createdState);
	 //    	} catch(err) {
	 //    		console.log(err);
	 //    	}
		// }
	}
}

stateSeed();
