import { userModle } from "../../DB/models/user.model.js";

export const checkEmailExist = async (req, res, next) => {
  let user = await userModle.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ message: "User already exists" });

  next();
};
