import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",});
  res.cookie("jwt", token, {
    httpOnly: true,
    // secure: true,
    sameSite: "strict"
  });
//   console.log("Token generated and cookie set.");
};export default generateToken;