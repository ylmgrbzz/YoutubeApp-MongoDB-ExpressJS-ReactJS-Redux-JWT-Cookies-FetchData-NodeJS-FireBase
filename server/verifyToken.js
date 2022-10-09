import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "YETKİLİ DEĞİLSİN"));

  jwt.verify(token, "987654asdf", (err, user) => {
    if (err) return next(createError(403, "TOKEN MEVCUT DEĞİL"));
    req.user = user;
    next()
  });
};