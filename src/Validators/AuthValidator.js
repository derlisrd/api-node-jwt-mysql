import { check } from "express-validator";
import { ValidateResult } from "../Helpers/ValidateHelpers.js";
import User from "../Models/User.js";


const AuthValidator = {

    login: [
        check('email')
        .exists().withMessage('Debe tener un campo de email')
        .isEmail().withMessage('Debe ser un e-mail válido')
        .custom(async value =>{
            const existingUser = await User.findOne({ where: { email: value } });
            if (!existingUser) {
              throw new Error('Datos inexistentes');
            }
        })
        ,
        check('password')
        .exists().withMessage('Debe tener un campo de password')
        .notEmpty().withMessage('El password no puede ser vacío'),
        (req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ],

    register: [
        check('email')
        .exists().withMessage('Debe tener un campo de email')
        .isEmail().withMessage('Debe ser un e-mail válido')
        .custom(async value => {
            const existingUser = await User.findOne({ where: { email: value } });
            if (existingUser) {
              throw new Error('Existe ya ese e-mail use otro');
            }
          })
        ,
        check('password')
        .exists().withMessage('Debe tener un campo de password')
        .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres')
        .notEmpty().withMessage('El password no puede ser vacío'),
        (req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ]
    
}
export default AuthValidator