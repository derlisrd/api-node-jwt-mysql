import env from "../Config/env.js";
import jwt from 'jsonwebtoken';
const { verify } = jwt;

export default function (req, res, next){
    try {
        
        const token_autho = req.headers.authorization
        const publicpath = req.path.substring(0,7)
        
        if(req.path === '/auth/login' || req.path === '/auth/register' || publicpath === '/public'){
            return next()
        }
        const token = token_autho.split(' ')[1]
        if(!token){
            return res.status(401).json({
                response:false,
                message:'Token format is no valid'
            })
        }
        if (!token) return res.status(403).json({response:false, error:true, message:"Access denied."});
        
        const payload = verify(token,env.SECRET_JWT)

        if(Date.now()> payload.exp){
            return res.status(401).json({
                response:false,
                message:'Token expired'
            })   
        }
        return next();
    } catch (error) {
        res.status(401).json({response:false,message:"Invalid token"});
    }
}