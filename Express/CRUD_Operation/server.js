// Import Express (CJS);

const express = require("express");

//import fs module

const fs = require("fs")

//Calling Express in app
const app = express();


//We need a parser that convert Stringify data into JSON Formate.
app.use(express.json()) //JSON body parser

//Get Method
app.get("/", (req, res) => {
    res.json({ msg: "This is the Home Route" });
})

app.get("/all-courses", (req, res) => {

    // Data in the form of Stringify;

    //parse the data into JSON
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses
    console.log(data.courses)
    res.status(200).json({ msg: "List of All Courses", courses })
})

// Get Course by ID

app.get("/courses/:courseId", (req, res) => {

    let path = req.params.courseId

    //parse the data into JSON
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses;

    let index = courses.findIndex((el) => el.id == path);

    if (index == -1) {
        res.status(404).json({ msg: 'Course Not Found!' })
    }
    else {
        courses.filter((el) => {
            if (el.id == path) {
                res.status(200).json({ msg: "Course Details", course: el })
            }
        })
    }

})

//get course by title using query params.

app.get("/course", (req, res) => {
    let title = req.query.title;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses;

    let found = false;

    courses.forEach((el)=>{
        if(el.title.includes(title)){
            res.status(200).json({msg : 'Course Details' , Course : el})
            found = true;
        }
    })

    if(!found){
        res.status(404).json({msg : "Course Not found"});
    }

})


//Add Course or PUSH method

app.post("/add-course", (req, res) => {
    //Request for add new course;
    //here we are reading the body and creating a newcourse variable;
    let newCourse = req.body;
    //parse the data into JSON formate so we can read or update;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    // accessing courses;
    let courses = data.courses
    // creating id dynamically
    let id = courses[courses.length - 1].id + 1;
    //using spread operator pasting all data and adding new ID
    newCourse = { ...newCourse, id }
    courses.push(newCourse)
    //writing the data again using File System Module.
    data = fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(201).json({ msg: "Course is Added" })
})

// Update the Courses or PUT method;

app.put("/update-course/:id", (req, res) => {
    let id = req.params.id;
    let updatedBody = req.body;

    //reading db.json file using fs module.
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses;

    //check if course is present or not.
    let index = courses.findIndex((course) => course.id == id);

    if (index == -1) {
        res.status(404).json({ msg: "Course Not Found!" })
    }
    else {
        let updatedCourses = courses.map((el) => {
            if (el.id == id) {
                return el = { ...el, ...updatedBody }
            }
            else {
                return el;
            }

        })
        data.courses = updatedCourses;
        fs.writeFileSync("./db.json", JSON.stringify(data));
    }

    res.status(201).json({ msg: 'Course Updated' })
})

//Delete Course and Delete Method.


app.delete("/delete-course/:id", (req, res) => {
    let id = req.params.id;
    //reading db.json file using fs module.
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let courses = data.courses;

    //check if course is present or not.
    let index = courses.findIndex((course) => course.id == id);

    if (index == -1) {
        res.status(404).json({ msg: "Course Not Found!" })
    }
    else {
        let updatedCourses = courses.filter((el) => {
            return el.id != id;
        })
        data.courses = updatedCourses;
        console.log(courses)
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.status(200).json({ msg: 'Course Deleted' })
    }

})






//Port Created.
const PORT = 4000;

//Server Started
app.listen(PORT, () => {
    console.log(`Server is Started on http://localhost:${PORT}`);
})