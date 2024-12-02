import mongoose from "mongoose";

const authSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timeStamp:true,
    versionKey:false

})

export default mongoose.model('Auth', authSchema)