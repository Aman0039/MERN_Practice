const mongoose = require("mongoose"); // importing mongoose;

//established a connection;

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017");
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error in DB Connection");
        console.log(error)
    }
}

connectToDB();