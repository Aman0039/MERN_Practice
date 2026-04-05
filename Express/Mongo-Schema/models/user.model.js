const mongoose = require("mongoose"); // importing mongoose.


//creating schema
const userSchema = new mongoose.Schema({
    name : {type : String , required : true ,minLength : 3 , maxLength : 15},
    email:{type : String , required : true , unique : true},
    age:{type : Number , min : 20 , max : 100},
    gender:String,
})

//creating model
const UserModel = mongoose.model('User' , userSchema); // user is collection name , schema


//exporting user model.
module.exports = UserModel;