const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "nitro_06@meta.ua",
    pass: META_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const email = { ...data, from: "nitro_06@meta.ua" };

  console.log('transporter', transporter);

  await transporter.sendMail(email);
  
  console.log("Email sent");
  
  return true;
};

module.exports = sendEmail;