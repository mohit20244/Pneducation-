const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../config/generateToken");
//const uploadMedia = require('../config/cloudinary')
const {deleteMediaFromCloudinary,uploadMedia} = require('../config/cloudinary')

class UserController {
  static signUp = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      // console.log(req.body);
      // Check if all fields are provided
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ status: "failed", message: "All fields are required!" });
      }

      // Check if the user already exists
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        return res
          .status(400)
          .json({ status: "failed", message: "Email already exists" });
      }

      // Hashing the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const userData = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      //   // Generating token and storing in cookies
      //   const token = jwt.sign({ ID: userData._id }, 'uqerhjf73h73jhd7');
      //   res.cookie("token", token, { httpOnly: true });

      // Return the created user data or a success message
      return res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: userData,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  };

  static signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          status: "failed",
          message: "Email and password are required.",
        });
      }

      // Find user by email
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({
          status: "failed",
          message: "You are not a registered user.",
        });
      }

      // Compare passwords
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.status(401).json({
          status: "failed",
          message: "Invalid email or password.",
        });
      }

      generateToken(res, user, `Welcome back ${user.name}`);
    } catch (error) {
      console.error("Error during sign-in:", error);

      // Internal server error
      return res.status(500).json({
        status: "failed",
        message: "Internal server error.",
      });
    }
  };
  static logOut = async (req, res) => {
    try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
        message: "Logged out successfully.",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }
  };

  static getUserProfile = async (req, res) => {
    try {
      const userId = req.id;
      // console.log(req.id);
      const user = await UserModel.findById(userId).select("-password");
      // .populate("enrolledCourses");
      if (!user) {
        return res.status(404).json({
          message: "Profile not found",
          success: false,
        });
      }
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Failed to load user",
      });
    }
  };
   

  static updateProfile = async (req, res) => {
    try {
      const userId = req.id;
      const { name } = req.body;
      const profilePhoto = req.file;

      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
      // extract public id of the old image from the url is it exists;
      if (user.photoUrl) {
        const publicId = user.photoUrl.split("/").pop().split(".")[0]; // extract public id
        deleteMediaFromCloudinary(publicId);
      }

      // upload new photo
      const cloudResponse = await uploadMedia(profilePhoto.path);
      const photoUrl = cloudResponse.secure_url;

      const updatedData = { name, photoUrl };
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
        new: true,
      }).select("-password");

      return res.status(200).json({
        success: true,
        user: updatedUser,
        message: "Profile updated successfully.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Failed to update profile",
      });
    }
  };
}
module.exports = UserController;
