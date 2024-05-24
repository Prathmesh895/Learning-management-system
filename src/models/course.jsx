import mongoose, { models } from "mongoose";

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"], 
    },
    shortdes:{
        type: String,
        required: [true, "Please provide a Creater"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
    Level: {
        type: String,
        required: [true, "Please provide a level"],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
    },
    CourseUrl: {
        type: String,
        required: [true, "Please provide a URL"],
    },
    isfree: {
        type:String,
    },
    langauge: {
        type: String,
        required: [true, "Please provide a langauge"],
    },
    expiry: {
        type: String,
        required: [true, "Please provide a langauge"],
    },
    Iscertificate: {
        type: String,
        required: [true, "Please provide a langauge"],
    },
    CreatedBy: {
        type: String,
        required: [true, "Please provide a Creater"],
    },
   
   


},
{ timestamps: true } 
)
const Courses = models.Courses || mongoose.model("Courses",CourseSchema);

export default Courses;