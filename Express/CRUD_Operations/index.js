const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("This is Home Route!"));

app.post("/add-data" , (req,res)=>res.send("Data Added"));

app.listen(5000, () => {
    console.log(`Server is Running on http://localhost:${5000}`);
})