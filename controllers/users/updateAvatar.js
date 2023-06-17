const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

const imgDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async (req, res) => {
  const { id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${id}_${originalname}`;

  const resultUpload = path.join(imgDir, filename);

  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);

  const image = await jimp.read(resultUpload);
  await image.resize(250, 250);
  await image.writeAsync(resultUpload);

  await User.findByIdAndUpdate(id, { avatarURL });
    res.json({ avatarURL });
};

module.exports = updateAvatar;