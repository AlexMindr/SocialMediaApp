import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import User from "../models/user.js"


const login = async  (req,res)=> {
    const {email,password} = req.body
    try {
        const oldUser = await User.findOne({ email });
        if(!oldUser){
            return res.status(400).json({message:"The account doesn't exist!"})
        }
        const isPasswordValid = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordValid){
            return res.status(400).json({message:"Incorrect password!"})
        }
        const token=jwt.sign({id:oldUser._id,email:oldUser.email},process.env.SECRET,{expiresIn:'1h'})
        res.status(200).json({result:oldUser,token})

    } catch (error) {
        res.status(500).json({message:"Something went wrong!"})
        
    }
}
const signup = async  (req,res)=> {
    const {username,email,password,confirmPassword}=req.body
    try {
        const oldUser = await User.findOne({ email });
        if(oldUser){
            return res.status(400).json({message:"The account already exists!"})
        }
        if(password!==confirmPassword){
            return res.status(400).json({message:"Passwords don't match!"})
        }  
        const encryptPass= await bcrypt.hash(password,12)
        const result = await User.create({username,email,password:encryptPass})
        const token=jwt.sign({id:result._id,email:result.email},process.env.SECRET,{expiresIn:'1h'})
        
        res.status(201).json({result,token})


    } catch (error) {
        res.status(500).json({message:"Something went wrong!"})
    }
}

export {login,signup}