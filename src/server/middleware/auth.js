const { User } = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.get("authToken");
    if(!token) {
        throw new Error('login to proceed');
    }
    const user = await User.findByToken(token);
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(400).send({
        err:true,
        msg:'login to proceed'
    })
  }
};
module.exports = auth;
