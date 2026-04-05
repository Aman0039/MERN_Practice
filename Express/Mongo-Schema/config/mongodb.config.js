const mongoose = require("mongoose"); // importing mongoose.


//creating fn to connect DB.
const connectToDB = async ()=>{
   try {
     await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
     console.log("DB is connected");
   } catch (error) {
    console.log("Error in connecting DB");
    console.log(error);
   }
}

module.exports = connectToDB;