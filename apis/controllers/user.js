import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
export const getAllUsers = async (req, res) => {};
import jwt from "jsonwebtoken";
import ErrorHandler from "../middlewares/error.js";

import { config } from "dotenv";

config({ path: process.ENV });
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    // if (!user)
    //   return res.status(404).json({
    //     success: false,
    //     message: "Invalid Email or Password",
    //   });
    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    // if (!isMatch)
    //   return res.status(404).json({
    //     success: false,
    //     message: "Invalid Email or Password",
    //   });

    sendCookie(user, res, `Welcome back!, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res) => {
  try {
    // Get the user ID from the authenticated user (req.user)
    const userId = req.user._id;

    // Extract the fields you want to update from the request body
    const { name } = req.body;

    console.log("UserId", userId);
    console.log("Updated name:", name);
    // Find the user by their ID and update the specified fields
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { name },
      { new: true } // Return the updated user document
    );

    console.log("Updated User:", updatedUser);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the updated user object as a response
    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    // if (user)
    //   return res.status(404).json({
    //     success: false,
    //     message: "User already exists",
    //   });
    if (user) return next(new ErrorHandler("User already exists", 400));

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  //is chiz ko possible karne we imported...app.use(cookieParser())..in app.js

  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      // const { name, email } = res.user;

      res.status(200).json({
        success: true,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};
/*
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  //   console.log(req.query);

  res.json({
    success: true,
    users,
  });
};
*/
/*
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered Successfully",
  });
};
*/
/*
export const special = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};
*/
/*
export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};
*/
/*
export const updateUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated",
  });
};
*/
/*
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  await user.remove();
  res.json({
    success: true,
    message: "Deleted",
  });
};
*/
