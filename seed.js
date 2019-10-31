const State = require("./models/state")
const Rock = require("./models/rock");
const express = require("express");
require('dotenv').config();
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
	try { 
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

		    const createdRocks = await Rock.create(coloradoRockArr)
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
		    console.log(createdRocks)
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const newMexicoRockSeed = async () => {
	try { 
		const newMexico = await State.findOne({"name": "New Mexico"});
	    if (newMexico.rocks !== "undefined" && newMexico.rocks.length > 0){
	        return;
	    } else {

		    const newMexicoRockArr = [
		    {name: "Turquoise",
		     IMG: "turquoise.jpg"},
		    {name: "Azurite",
		     IMG: "azurite.jpg"},
		    {name: "Peridot",
		     IMG: "peridot.jpg"},
		    {name: "Fluorite",
		     IMG: "fluorite.jpg"},
		    {name: "Carnelian",
		     IMG: "carnelian.jpg"}
		    ]
		    console.log(newMexico.rocks);

		    console.log(newMexicoRockArr);

		    const createdRocks = await Rock.create(newMexicoRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			newMexico.rocks.push(createdRocks[i])
		    			await newMexico.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(newMexico);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    console.log(createdRocks)
		    const petrifiedWood = await Rock.findOne({"name": "Petrified Wood"})
		    console.log (petrifiedWood)
			 newMexico.rocks.push(petrifiedWood);
			 petrifiedWood.states.push(newMexico)
			 await newMexico.save();
			 await petrifiedWood.save();
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const maineRockSeed = async () => {
	try { 
		const maine = await State.findOne({"name": "Maine"});
	    if (maine.rocks !== "undefined" && maine.rocks.length > 0){
	        return;
	    } else {

		    const maineRockArr = [
		    {name: "Tourmaline",
		     IMG: "tourmaline.jpg"},
		    {name: "Sodalite",
		     IMG: "sodalite.jpg"},
		    {name: "Amethyst",
		     IMG: "amethyst.jpg"},
		    {name: "Beryl",
		     IMG: "beryl.jpg"},
		    {name: "Garnet",
		     IMG: "garnet.jpg"}
		    ]
		    console.log(maine.rocks);

		    console.log(maineRockArr);

		    const createdRocks = await Rock.create(maineRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			maine.rocks.push(createdRocks[i])
		    			await maine.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(maine);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    console.log(createdRocks)
		    const smokyQuartz = await Rock.findOne({"name": "Smoky Quartz"})
		    
			maine.rocks.push(smokyQuartz);
			smokyQuartz.states.push(maine)
			await maine.save();
			await smokyQuartz.save();
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const alaskaRockSeed = async () => {
	try { 
		const alaska = await State.findOne({"name": "Alaska"});
	    if (alaska.rocks !== "undefined" && alaska.rocks.length > 0){
	        return;
	    } else {

		    const alaskaRockArr = [
		    {name: "Jade",
		     IMG: "jade.jpg"},
		    ]
		    console.log(alaska.rocks);

		    console.log(alaskaRockArr);

		    const createdRocks = await Rock.create(alaskaRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			alaska.rocks.push(createdRocks[i])
		    			await alaska.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(alaska);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    console.log(createdRocks)
		    const garnet = await Rock.findOne({"name": "Garnet"})
		    
			alaska.rocks.push(garnet);
			garnet.states.push(alaska)
			await alaska.save();
			await garnet.save();
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const arizonaRockSeed = async () => {
	try { 
		const arizona = await State.findOne({"name": "Arizona"});
	    if (arizona.rocks !== "undefined" && arizona.rocks.length > 0){
	        return;
	    } else {

		    const arizonaRockArr = [
		    {name: "Agate",
		     IMG: "agate.jpg"},
		    ]
		    console.log(arizona.rocks);

		    console.log(arizonaRockArr);

		    const createdRocks = await Rock.create(arizonaRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			arizona.rocks.push(createdRocks[i])
		    			await arizona.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(arizona);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    console.log(createdRocks)
		    const turquoise = await Rock.findOne({"name": "Turquoise"})
		    
			arizona.rocks.push(turquoise);
			turquoise.states.push(arizona)
			await arizona.save();
			await turquoise.save();

			const petrifiedWood = await Rock.findOne({"name": "Petrified Wood"})
			    
			arizona.rocks.push(petrifiedWood);
			petrifiedWood.states.push(arizona)
			await arizona.save();
			await petrifiedWood.save();
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const arkansasRockSeed = async () => {
	try { 
		const arkansas = await State.findOne({"name": "Arkansas"});
	    if (arkansas.rocks !== "undefined" && arkansas.rocks.length > 0){
	        return;
	    } else {

		    const arkansasRockArr = [
		    {name: "Quartz",
		     IMG: "quartz.jpg"},
		     {name: "Magnetite",
		     IMG: "magnetite.jpg"},
		     {name: "Wavellite",
		     IMG: "wavellite.jpg"},
		    ]
		    console.log(arkansas.rocks);

		    console.log(arkansasRockArr);

		    const createdRocks = await Rock.create(arkansasRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			arkansas.rocks.push(createdRocks[i])
		    			await arkansas.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(arkansas);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}

const massachusettsRockSeed = async () => {
	try { 
		const massachusetts = await State.findOne({"name": "Massachusetts"});
	    if (massachusetts.rocks !== "undefined" && massachusetts.rocks.length > 0){
	        return;
	    } else {

		    const rhodoniteRockArr = [
		    {name: "Rhodonite",
		     IMG: "rhodonite.jpg"},
		     {name: "Babingtonite",
		     IMG: "babingtonite.jpg"},
		    ]
		    console.log(massachusetts.rocks);

		    console.log(massachusettsRockArr);

		    const createdRocks = await Rock.create(massachusettsRockArr)
		    		for (let i=0 ; i<createdRocks.length; i++) {
		    			console.log(createdRocks[i]);
		    			massachusetts.rocks.push(createdRocks[i])
		    			await massachusetts.save();
		    			await createdRocks[i].save();
		    		}

		    		for (let i=0; i<createdRocks.length; i++) {
		    			createdRocks[i].states.push(massachusetts);
		    			await createdRocks[i].save();
		    			console.log(createdRocks[i]);
		    		}
		    
		}
	} catch (err) {
		console.log(err);
		res.send(err);
	}	
}


const seedAll = async () =>
{
	await stateSeed();
	await coloradoRockSeed();
	await newMexicoRockSeed();
	await maineRockSeed();
	await alaskaRockSeed();
	await arizonaRockSeed();
	await arkansasRockSeed();
	await massachusettsRockSeed();
}

seedAll();



