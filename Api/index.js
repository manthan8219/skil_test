import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import User from "./models/user.js"
import  adminRoute from './routes/admin.js'
import userRoute from './routes/user.js'
const app= express()
dotenv.config();
app.use(cors())
app.use(express.json())

const connect = async () => {
try{
    await mongoose.connect(process.env.MONGO_URL,console.log("connection to database is estbalished"))
}
catch(err){
    console.log(err)
}
}

app.use("/api/auth",authRoute)
app.use('/api/admin',adminRoute)
app.use('/api/user',userRoute)

app.listen(5000,()=>{
    connect()
    console.log("server is running")
})