import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    Phone_number:{
        type:Number,
        required:true,
        unique:true
    },
    Home_Address:{
        type:String,
        required:true
    },
    Aadhar_Number:{
        type:Number,
        required:true,
        unique:true
    }
})


const userSchema = new mongoose.Schema({
Email_Address:{
    type:String,
    required:true,
    unique:true
},
Password:{
    type:String,
    required:true
},
isAdmin:{
    type:Boolean,
    default:false
}
,
data:dataSchema
})

export default mongoose.model("User",userSchema)
