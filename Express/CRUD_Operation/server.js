// Import Express (CJS);

const express = require("express");

//Calling Express in app
const app = express();

//Get Method
app.get("/" , (req,res)=>{
    res.send("This is the Home Route");
})

//Port Created.
const PORT = 4000;





//Server Start
app.listen(PORT , ()=>{
    console.log(`Server is Started on http://localhost:${PORT}`);
})