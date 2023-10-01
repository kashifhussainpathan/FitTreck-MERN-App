const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const { getUser } = require("../controllers/auth.controllers.js");

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};

const extractUserIDFromToken = (decodedToken) => {
  if (decodedToken && decodedToken.email) {
    return decodedToken.email;
  } else {
    throw new Error("Invalid or missing email in token");
  }
};

const authVerify = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = verifyToken(token);
    const email = extractUserIDFromToken(decoded);
    const user = await getUser(email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized access, please add a valid token" });
  }
};

module.exports = authVerify;
