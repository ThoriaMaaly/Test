import { userModle } from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  await userModle.insertMany({ name, email, password });
  res.json({ message: "Success" });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  let user = await userModle.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    let token = jwt.sign({ _id: user._id, role: user.role }, "secret", {});
    return res.json({ message: "Success Login", token });
  }
  res.json({ message: "Incorrect email or password" });
};
