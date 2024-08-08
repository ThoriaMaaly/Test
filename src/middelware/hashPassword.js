import bcrypt from "bcrypt";

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  req.body.password = bcrypt.hashSync(password, 8);
  next();
};
