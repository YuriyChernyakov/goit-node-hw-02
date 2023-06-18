const { User } = require("../../models");
const { NotFound } = require("http-errors");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  console.log('req', req);

  const user = await User.findOne({ token: verificationToken });
  if (!user) {
    throw new NotFound("Not found verification token");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.json({
    message: "Email was successfully verified",
  });
};

module.exports = verifyEmail;