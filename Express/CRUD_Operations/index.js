const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("This is Home Route!"));

app.get("/about" , (req,res)=>res.send("This is the About Page"))

app.listen(5000, () => {
    console.log(`Server is Running on http://localhost:${5000}`);
})