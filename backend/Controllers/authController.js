const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { default: mongoose, mongo } = require('mongoose')
const UserModel = require('../Models/UserModel')


require("dotenv").config()

const login = async (req,res) => {
    try {
        const {email,password} = await req.body
        const user = await UserModel.findOne({ email });
        console.log(email +" "+password);
        console.log(user);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        
        const token = jwt.sign(
            {_id:user._id,email:user.email},
            process.env.JWT_SECRET
        )
        res.status(200).json({token});
    } catch (error) {
        res.status(400).json(error);
    }
}

const signup = async (req,res) => {
    try {
        const {firstName,lastName,email,phoneNo,password } = req.body
        console.log(firstName);
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(500).json({ message: "Username already Exists" });
        }
        const hash = await bcrypt.hash(password, 10);
        const user = new UserModel({firstName,lastName,email,phoneNo,password:hash})
        await user.save()
        res.status(200).json({ user, message: "User is added sucessfully" });

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {login,signup}
