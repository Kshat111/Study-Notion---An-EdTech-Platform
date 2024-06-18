const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
        enum: ["Admin", "Student", "Instructor"],
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
    
    // courses and courseProgress are stored as an array
    // a student may be enrolled in multiple courses
    courses: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
        }
    ],
    images: {
        type:String,
        required:true,
    },
    courseProgress: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress",
        }
    ],
})

module.exports = mongoose.model("User", userSchema);