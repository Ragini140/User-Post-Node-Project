const jwt = require('jsonwebtoken')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.send({ status: 422, message: "Missing Headers" });
    //verify token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") return res.send({ status: 401, message: 'Token Expired Please Login Again'})
  }
};

module.exports = { isAuth };