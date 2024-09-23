import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  });
//   console.log("Token generated and cookie set.");
};
export default generateToken;
