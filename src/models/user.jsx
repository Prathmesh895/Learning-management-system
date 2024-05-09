import mongoose, {models} from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide a username"],
    },
    lname: {
        type: String,
        required: [true, "Please provide a email"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        enum: ['instr','Subadmin','student',"Instructor"],
        default: 'student'
      }
},
{ timestamps: true } 
)

const User = models.User || mongoose.model("User", userSchema);

export default User;

