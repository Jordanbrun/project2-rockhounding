const express = require("express"); 
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.get("/new" (req, res) => {
	res.render("registration.ejs")
});

router.post("/registeration", async (req, res) => {
	try {
		const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		const newUser = {
			username: req.body.username,
			password: hashedPassword,
			email: req.body.email
		}

		const createdUser = await User.create(newUser);
		req.session.username = createdUser.username;
		req.session.logged = true;

		res.redirect("/")
	} catch(err) {
		res.send(err);
	}

})


//GITHUB IS AWFUL AND I WANT TO CRY

module.exports = router;