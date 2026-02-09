// Install Express - done;

// Importing express using cjs.
const express = require("express");


//calling express fn by app.
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/home" , (req,res)=>res.send("This is Home Route"));

app.get("/contactus" , (req,res)=> res.send("This is contact page"))

//Just Example of Routing with Defferent Method;

//get data;
app.get("/services",(req,res)=>res.send("Explore Our Services!"))

//adding data;
app.post("/add-data" , (req,res)=>{
  res.send("data is added");
})

//update data;

app.put("/update-data" , (req,res)=>{
  res.send("Data is Added");
})

// Delete Data;

app.delete("/delete-data" , (req,res)=>{
  res.send("Data Deleted");
})

// Define port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
