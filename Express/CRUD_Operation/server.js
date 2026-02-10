// Import Express (CJS);

const express = require("express");

//import fs module

const fs = require("fs")

//Calling Express in app
const app = express();

app.use(express.json()) //JSON body parser

//Get Method
app.get("/" , (req,res)=>{
    res.json({msg:"This is the Home Route"});
})

app.get("/all-courses" , (req,res)=>{

    // Data in the form of Stringify;
    // let data = fs.readFileSync("./db.json" , "utf-8");

    //parse the data into JSON
    let data = JSON.parse(fs.readFileSync("./db.json" , "utf-8"));
    let courses = data.courses
    console.log(data.courses)
    res.json({msg : "List of All Courses" , courses})
})




//Port Created.
const PORT = 4000;
//Server Start
app.listen(PORT , ()=>{
    console.log(`Server is Started on http://localhost:${PORT}`);
})