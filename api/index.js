import dotenv from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
const app=express();
dotenv.config()
const MONGO= process.env.MONGO;


mongoose.connect(MONGO).then(()=>{
    console.log("mongoDB connected successfully")
}).catch((error)=>{
console.log(error)
});

app.use(express.json())
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use((error,req,res,next)=>{
    const statusCode=error.statusCode||500;
    const message=error.message||'Internal Sever Error';
    return res.status(statusCode).json({success:false, statusCode ,message})
})



app.listen(3000,()=>{
    console.log(`server running on port http://localhost:3000`)
})



