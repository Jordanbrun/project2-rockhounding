const mongoose = require("mongoose");

const usersSchema = mongoose.Schema ({
	username: {type: String, unique: true},
	email: String
	password: String,
	states: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "State"
	}],
	rocks: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Rock"
	}],
	posts: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Post"

	}]

});

const User = mongoose.model("User", usersSchema);
module.exports = User;