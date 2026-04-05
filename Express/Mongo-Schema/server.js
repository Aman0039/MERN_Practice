const express = require("express");

//importing config file.
const connectToDB = require("./config/mongodb.config");
const UserRouter = require("./routes/user.router");

//calling express fn to app.
const app = express();

app.use(express.json()) // body parser middleware

// connecting DB.
connectToDB();


//test route;
app.get("/test" , (req, res)=>{
    res.status(200).json({msg : "This is test route!"});
})

// middleware to handle the users router.
app.use("/users", UserRouter);

// handlling unknown routes;

app.use((_,res)=>{
    res.status(404).json({msg : "This Route is not found!"})
})

// starting server.
app.listen(8080 ,()=>{
    console.log(`server started http://localhost:${8080}`);
})