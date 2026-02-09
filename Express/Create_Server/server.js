// Install Express - done;

// Importing express using cjs.
const express = require("express");


//calling express fn by app.
const app = express();

// Define port
const PORT = 3000;

// Test route
app.get("/", (req, res) => {
  res.status(ok).send("Server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
