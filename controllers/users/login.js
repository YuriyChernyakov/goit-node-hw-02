const { User } = require("../../models");
const bcrypt = require("bcrypt");
const HttpError = require("../../helpers/HttpError");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async(req,res) =>{
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if(!user){
    throw new HttpError(401,"Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(password,user.password);
  if(!passwordCompare){
    throw new HttpError(401,"Email or password invalid");
  }
  const payload = {
    id: user._id,
  }

  const token = jwt.sign(payload, SECRET_KEY, {expiresIn:"23h"});
  await User.findByIdAndUpdate(user._id, { token});
  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    }
  })

}

module.exports = login;