import mongoose, { models } from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    description:{
        type: String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    }
    
},
{ timestamps: true } 
)
const Courses = models.Courses || mongoose.model("Courses",CourseSchema);

export default Courses;