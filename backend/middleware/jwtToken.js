const { User } = require("../model/UserSchema");
const jwt = require("jsonwebtoken");
const authenticateTokenUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  console.log(authHeader);
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ msg: "Token expired" });
      }
      req.userId = decoded.userId;
      //Check if user exists in database
      const user = await User.findById({ _id: req.userId });
      if (!user) return res.status(403).json({ msg: "User Not Found" });
      next();
    });
  }
};
protectedAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ msg: "Token expired" });
      }
      req.userId = decoded.userId;
      //Check if user exists in database
      const user = await User.findById({ _id: req.userId });
      if (!user) return res.status(403).json({ msg: "User Not Found" });
      if (user.role == "admin") next();
      else {
        return res.status(403).json({ msg: "Not an authorized user" });
      }
    });
  }
};

module.exports = { authenticateTokenUser, protectedAdmin };
