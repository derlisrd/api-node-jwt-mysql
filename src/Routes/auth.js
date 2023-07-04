import { Router } from "express";
import AuthController from "../Controllers/AuthController.js";
import AuthValidator from "../Validators/AuthValidator.js";

const router = Router()

router.post('/login',AuthValidator.login,AuthController.login)

router.post('/register', AuthValidator.register,AuthController.register)


export default router


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicio de sesión de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Dirección de correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso. Devuelve el token de acceso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "asdfasdfa8s9dfasdnhjfasdf.asdasduweqruq.asdf8ehjd"
 *                   description: Token de acceso para autenticación.
 *       401:
 *          description: Credenciales inválidas
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: false
 *                    message:
 *                      type: string
 *                      example: "Credenciales inválidas"
 *       500:
 *          description: Error de servidor
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: false
 *                    message:
 *                      type: string
 *                      example: "Algo ocurrió con la petición intente más tarde"
 * 
 * 
 * /auth/register:
 *   post:
 *     summary: Registro de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Dirección de correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Registro existoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: integer
 *                      example: 2
 *                  email:
 *                      type: string
 *                      example: "harry@hedwidg.com"
 *                  password:
 *                      type: string
 *                      example: "clave_encriptada_muy_segura"
 *                  createdAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *                  updatedAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *       400:
 *          description: Validaciones de parametros
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: false
 *                    message:
 *                      type: string
 *                      example: "Formato de e-mail inválido"
 *       409:
 *          description: Email en uso
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: false
 *                    message:
 *                      type: string
 *                      example: "Email ya tomado. Elija otro"
 *       500:
 *          description: Error de servidor
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: false
 *                    message:
 *                      type: string
 *                      example: "Algo ocurrió con la petición intente más tarde"
 */

