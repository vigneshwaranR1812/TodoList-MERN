const jwt = require("jsonwebtoken");
const { User } = require("../model/UserSchema");

// @desc    Sign Up User
// @route   POST /api/v1/User/signUp
// @access  Public
const SignUpUser = async (req, res) => {
  const { name, phoneNumber, username, password, role } = req.body;
  const newUser = new User({
    name,
    phoneNumber,
    password,
    username,
    role,
  });

  const existUser = await User.findOne({ phoneNumber });
  if (existUser) {
    res
      .json({ msg: "User Already Exist. Try to create new account" })
      .status(405);
  } else {
    await newUser.save();
    const response = {
      name: newUser.name,
      phoneNumber: Number(newUser.phoneNumber),
      username: newUser.username,
      role: newUser.role,
      token: jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET),
      msg: "Successfully signed up!!",
    };
    return res.json(response).status(200);
  }
};

// @desc    Login User
// @route   POST /api/v1/User/login
// @access  Public
const LoginUser = async (req, res) => {
  try {
    var { username, phoneNumber, password } = req.body;
    console.log(req.body);
    phoneNumber = Number(phoneNumber);
    const existUser = await User.findOne({ username, phoneNumber });
    if (existUser && (await existUser.matchPassword(password))) {
      return res
        .json({
          name: existUser.name,
          phoneNumber: existUser.phoneNumber,
          username: existUser.username,
          role: existUser.role,
          token: jwt.sign({ userId: existUser._id }, process.env.JWT_SECRET),
          msg: "Successfully logged in!!",
        })
        .status(200);
    } else {
      return res.json({ msg: "User Not found. Kindly register" });
    }
  } catch (err) {
    console.log(err);
  }
};
// @desc    Login User
// @route   GET /api/v1/User/fetchAllUser
// @access  Private
const FetchAllUser = async (req, res) => {
  const allUser = await User.find({ role: "user" }).select(["-password"]);
  return res.json(allUser).status(200);
};
module.exports = { SignUpUser, LoginUser, FetchAllUser };
