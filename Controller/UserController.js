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

export async function loginUser(req,res) {
    try{
        const users = await User.find({email : req.body.email});
        res.json(users)
    }
    catch(error){
        res.json({
            error : error.message
        })
    }
}


export function isAdmin(req){
     if(req.User==null){
        return false
     }
    if(req.User.type !="admin"){
        return false
    }
    return true

}

export function isCustomer(req){
    if(req.User == null){
        return false
    }
    if(req.User.type != "user"){
        return false
    }
    return true
}