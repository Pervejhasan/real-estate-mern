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


app.listen(3000,()=>{
    console.log(`server running on port http://localhost:3000`)
})



