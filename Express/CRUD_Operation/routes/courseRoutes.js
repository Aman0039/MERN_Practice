const fs = require("fs");
const express = require("express");

//Here I created a course routes to handle the course data only.

const courseRouter = express.Router()

courseRouter.get("/all-courses", (req, res) => {

    // Data in the form of Stringify;

    //parse the data into JSON
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses
    console.log(data.courses)
    res.status(200).json({ msg: "List of All Courses", courses })
})

module.exports = courseRouter;