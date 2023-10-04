import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
dotenv.config()
const MONGO= process.env.MONGO;
mongoose.connect(MONGO).then(()=>{
    console.log("mongoDB connected successfully")
}).catch((error)=>{
console.log(error)
});
const app=express();

app.listen(3000,()=>{
    console.log("server running on port 3000")
})