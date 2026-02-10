// Install Express - done;

// Importing express using cjs.
const express = require("express");


//calling express fn by app.
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/home" , (req,res)=>res.send("This is Home Route"));

app.get("/contactus" , (req,res)=> res.send("This is contact page"))

//Just Example of Routing with Defferent Method;

//get data;
app.get("/services",(req,res)=>res.send("Explore Our Services!"))


// Define port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
