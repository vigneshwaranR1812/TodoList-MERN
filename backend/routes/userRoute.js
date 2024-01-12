const express = require("express");
const router = express.Router();
const {
  SignUpUser,
  LoginUser,
  FetchAllUser,
} = require("../controller/userController");
const { protectedAdmin } = require("../middleware/jwtToken");

router.post("/signUp", SignUpUser);
router.post("/login", LoginUser);
router.get("/fetchAllUser", protectedAdmin, FetchAllUser);
module.exports = router;
