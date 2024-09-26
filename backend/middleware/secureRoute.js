import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
const secureRoute = async(req,res,next)=>{
try{
    const token = req.cookie.jwt;
    if(!token){
    res.status(401).json({error:"No token, authorization denied"});}
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if(!decode){
        res.status(401).json({error:"Invalid token"});
    }
    const user = await User.find(decode.userId).select("-password");
    if(!user){
    res.status(401).json({error:"user not found"});
    }
    req.user=user;
    next();
    }
    catch(error){
    console.log("error in secureRoute",error);
    res.status(500).json({error:"Internal server error"});
    }
}
export default secureRoute;