import { validationResult } from "express-validator";

const ValidateResult = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        let responseError = {
            response:false,
            message:err.errors[0].msg
        }
        return res.status(500).json(responseError)
    }
}


export {ValidateResult}