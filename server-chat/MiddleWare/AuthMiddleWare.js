const jwt = require("jsonwebtoken");
const User = require("../Model/UserModel");

const protect = async (req, res, next) => {
  console.log(req.headers)
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
};

module.exports = { protect };
