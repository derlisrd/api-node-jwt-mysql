import { check } from "express-validator";
import { ValidateResult } from "../Helpers/ValidateHelpers.js";


const PostValidator = {

    get:[
        check('page').isNumeric().withMessage('Page debe ser numérico')
        .custom((value, { req }) => {
            if (value < 1) {
                throw new Error('Page no puede ser menor a 1')
            }
            return true
        })
        ,(req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ],

    find:[
        check('id').isNumeric().withMessage('Id debe ser numérico')
        .custom((value, { req }) => {
            if (value < 0) {
                throw new Error('Id no puede ser menor a 0')
            }
            return true
        })
        ,(req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ],

    create: [
        check('title')
        .exists().withMessage('Debe tener un campo de title')
        .notEmpty().withMessage('Title no debe ser vacio'),
        check('body').exists().withMessage('Debe tener un campo de body')
        .notEmpty().withMessage('El body no debe ser vacio'),
        (req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ]    
}
export default PostValidator