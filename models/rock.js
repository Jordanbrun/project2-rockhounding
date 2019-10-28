const mongoose = require("mongoose");

const rocksSchema = mongoose.Schema ({
	name: String,
	IMG: String,
	users: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "User"
	}],
	states: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "State"
	}],
	posts: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Post"

	}]

});

const Rock = mongoose.model("Rock", rocksSchema);
module.exports = Rock;