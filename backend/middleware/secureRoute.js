import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(403).json({ error: "No token, authorization denied" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ error: "Invalid token" });
    }
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
    return res.status(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in secureRoute", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default secureRoute;
