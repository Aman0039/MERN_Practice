// Importing Express (CJS).
const express = require("express");

// Calling Express Fn In App.
const app = express();

//Get Method.
app.get("/", (req, res) => res.send("<p>This is Home Route!</p>"));

//sending data in form of json;

app.get("/test" , (req,res)=>{
    res.json({msg:"This Data in the JSON formate"})
})

//Calling Express.json() fn 
app.use(express.json()); //JSON body parser

// Post Method
app.post("/post-data" , (req,res)=>{
    console.log(req.body)
    res.send("Respose is here")
})

app.listen(5000, () => {
    console.log(`Server is Running on http://localhost:${5000}`);
})