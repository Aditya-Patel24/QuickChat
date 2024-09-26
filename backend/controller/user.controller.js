import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../jwt/generateToken.js";
export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password do not match" });

    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      fullname,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      generateToken(newUser._id, res);
      res
        .status(201)
        .json({
          message: "User created successfully",
          newUser: {
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
          },
        });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.status(404).json({ message: "User does not exist" });
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword)
      return res.status(401).json({ message: "Invalid credentials" });
    if (checkUser) {
      generateToken(checkUser._id, res);
      res.status(200).json({
        message: "Login successful",
        checkUser: {
          _id: checkUser._id,
          fullname: checkUser.fullname,
          email: checkUser.email,
        },
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const allUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(201).json(filteredUsers);
  } catch (error) {
    console.log("Error in allUsers Controller: " + error);
  }
};
