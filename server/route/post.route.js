const express = require("express")
const mongoose = require("mongoose")
const postModel = require("../model/post.model")
const auth = require("../middleware/auth.middleware")

const postRoute = express.Router()
postRoute.use(auth)

postRoute.get("/posts", async(req, res)=>{
    try {
        const posts = await postModel.find();
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

postRoute.get("/posts", async(req, res)=>{
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
    
        const posts = await postModel.find()
          .skip((page - 1) * limit)
          .limit(limit);
    
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

postRoute.get("/posts", async(req, res)=>{
    try {
        const category = req.query.category;
    
        const posts = await postModel.find({ category });
    
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

postRoute.get("/posts”", async(req, res)=>{
    try {
        const title = req.query.title;
    
        const posts = await postModel.find({ title });
    
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

postRoute.post("/posts", async(req, res)=>{
    try {
        const {id, user_id, title, category, content, media } = req.body;
    
        const newPost = new postModel({
          id,
          user_id,
          title,
          category,
          content,
          media,
        });
    
        await newPost.save();
    
        res.status(201).json({ message: "Post created successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message});
      }
})

postRoute.patch("/posts/:post_id", async(req, res)=>{
    try {
        const { user_id, title, category, content, media } = req.body;
    
        const updatedPost = await postModel.findByIdAndUpdate(
          req.params.post_id,
          { user_id, title, category, content, media },
          { new: true }
        );
    
        if (!updatedPost) {
          return res.status(404).json({ error: "Post not found" });
        }
    
        res.status(200).json({ message: "Post updated successfully" });
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
})

postRoute.delete("/posts/:post_id", async(req, res)=>{
    try{
        const deletedPost = await postModel.findByIdAndDelete(req.params.post_id)
        if(!deletedPost){
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
    }catch(err){
        res.status(400).json({error: err})
    }
})

module.exports=postRoute