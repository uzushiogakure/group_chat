const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await User.create({ name, email, password: hashPassword(password) });
      res.status(201).json({ message: "User has successfully created" });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };
      const checkEmail = await User.findOne({ where: { email } });
      if (!checkEmail) throw { name: "InvalidLogin" };
      const checkPassword = comparePassword(password, checkEmail.password);
      if (!checkPassword) throw { name: "InvalidLogin" };
      const payload = { id: checkEmail.id };
      const access_token = signToken(payload);
      // console.log(access_token);
      res
        .status(200)
        .json({
          message: "successfully login",
          access_token: access_token,
          data: checkEmail,
        });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
