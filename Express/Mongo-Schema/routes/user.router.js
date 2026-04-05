const express = require("express");
const UserModel = require("../models/user.model");

const UserRouter = express.Router();

UserRouter.get("/" , (req,res) =>{
    res.json({msg : "user Route"});
})

UserRouter.post("/add-user" , async (req, res)=>{
    try {
        let user = await UserModel.create(req.body);
        res.status(200).json({msg : "User Created" , user});
    } catch (err) {
        //internal server error
        console.log(err);
        res.status(500).json({msg : "Something went wrong , please try again later..."})
    }
})

module.exports = UserRouter;