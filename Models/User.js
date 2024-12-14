import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    email : {
        type : String,
      //  required : true,
        unique : true
    },
    firstName : {
        type : String,
     //   required : true
    },
    lastName : {
        type : String,
     //   required : true
    },
    password : {
        type : String,
     //   required :true
    },
    isBlock : {
        type : Boolean,
        default : false
    },
    type :{
        type : String,
        default : "customer"
    },
    profilePicture : {
        type : String,
        default : "https://www.canva.com/icons/MAF0swgwIXA-male-avatar-icon/"
    }
})

const User =mongoose.model("users",userSchema)

export default User;


// {
//     "email": "admin@example.com",
//     "firstName": "John",
//     "lastName": "Doe",
//     "password": "securePassword123",
//     "isBlock": false,
//     "type": "admin",
//     "profilePicture": "https://www.example.com/images/admin-avatar.jpg"
// }
