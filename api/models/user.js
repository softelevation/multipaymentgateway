const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	name: {type:String, required:true},
	email: {type:String,required:true,unique:true},
	password: {type:String,required:true},
	created_at : {type: Date, default: Date.now},
	is_deleted: {type: Number, default: 0}
});

const Usermodel = mongoose.model("User", userSchema, "users");
module.exports = Usermodel;