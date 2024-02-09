const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const uuid = require("uuid")
const userModel = require("../model/user.model")
const userRoute = express.Router()

userRoute.post("/register", async(req, res)=>{
    try{
        const {username, email, password, avatar} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            id:uuid.v4(),
            username,
            email,
            password: hashedPassword,
            avatar,
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

userRoute.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({userId: user.id}, "masai", {expiresIn: "1h"})
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
        res.status(200).json({ token });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

userRoute.get("/logout", (req, res)=>{
    try {
    
        res.status(200).json({ message: "Logout successful" });
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

module.exports=userRoute