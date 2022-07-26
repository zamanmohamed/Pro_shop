import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/genarateToken.js";

//@desc Auth user & get token
//@route GET/api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      //user ID එක JWT Token එක ලෙස පරිවර්තනය කර ඇත --> (JWT (2))
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

//@desc Register a new user
//@route GET/api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  } else {
    const user = await User.create({ name, email, password });
  }

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      //user ID එක JWT Token එක ලෙස පරිවර්තනය කර ඇත --> (JWT (2))
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

//@desc Get user profile
//@route GET/api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
  //මෙහිදී authMiddleware.js හි cerate කරපු "req.user" variable එක use කරයි --> (JWT (4))
  const user = await User.findById(req.user._id);
  console.log(req.user);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, getUserProfile, registerUser };
