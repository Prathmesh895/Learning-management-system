import mongoose, {models} from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    lname: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
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
},
{ timestamps: true } 
)

const User = models.User || mongoose.model("User", userSchema);

export default User;