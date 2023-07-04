import jwt from "jsonwebtoken";
import env from "../Config/env.js";
const {sign,verify} = jwt

const secret = env.SECRET_JWT;

const TOKEN_TIME_EXPIRED =  Date.now()+ 1000*60 * parseInt(env.TOKEN_EXPIRED_MINUTES) 


export const generateToken = (payload) => {
 
  try {
    payload.exp = TOKEN_TIME_EXPIRED
    const token = sign(payload,env.SECRET_JWT)
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Token inválido");
  }
};