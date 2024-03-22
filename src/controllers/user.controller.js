import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";

// generate AccessToken and RefreshToken
const generateAccessAndRefreshToken = async(userId) => {

} 

// create user in db
const registerUser = asyncHandler(async(req, res) => {

})

// login user
const loginUser = asyncHandler(async(req, res) => {

})

// logout user
const logoutUser = asyncHandler(async(req, res) => {

})

// change avatar
const updateUserAvatar = asyncHandler(async(req, res) => {

})

// update user details
const updateUserDetails = asyncHandler(async(req, res) => {
    
})

// refresh access token
const refreshAccessToken = asyncHandler(async(req, res) => {

})

// change current password
const changeCurrentPassword = asyncHandler(async(req, res) => {

})

// get current user
const getCurrentUser = asyncHandler(async(req,res) => {

})

export {
    registerUser,
    loginUser,
    logoutUser,
    updateUserAvatar,
    updateUserDetails,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser
}