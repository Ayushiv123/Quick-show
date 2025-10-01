import mongoose, { Schema } from "mongoose";
 
const userSchema = new mongoose.Schema({
    _id:{type:String , required:true },
      name:{type:String , required:true },
       email:{type:String , required:true },
        image:{type:String , required:true }
})
const user= Schema.model('user',userSchema)

export default user; 