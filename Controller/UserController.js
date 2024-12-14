import User from "../Models/User.js";

export async function createUser(req,res){
    const newUserData = req.body

    const user = new User(newUserData)
    
    try{
       await user.save();
       res.json({
        message : "User created"
       })  
    }
    catch(error){
        res.json({
            message :"User not created"
        })
    }
}

export async function getUser(req,res) {
    try{
        const users = await User.find({});
        res.json(users)
    }
    catch(error){
        res.json({
            error : message.error
        })
    }
}