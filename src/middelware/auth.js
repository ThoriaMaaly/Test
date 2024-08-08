import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, "secret", async (err, decoded) => {
    if (err) return res.json({ message: "Invalid Token", err });
    next();
  });

};
