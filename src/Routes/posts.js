import { Router } from "express";
import PostController from "../Controllers/PostController.js";
import PostValidator from "../Validators/PostValidator.js";

const router = Router()

router.get('/',PostValidator.get,PostController.all)

router.get('/:id',PostValidator.find,PostController.find)

router.post('/',PostValidator.create,PostController.create)

router.put('/:id',PostController.update)

router.delete('/:id',PostController.destroy)



export default router

/**
 * @swagger
 *  /posts:
 *   get:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Obtiene una lista paginada de posts.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página (opcional, por defecto es 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Límite de resultados por página (opcional)
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Campo por el cual se desea ordenar los resultados (por defecto "createdAt")
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Orden de clasificación de los resultados (por defecto DESC)
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filtrar los posts por título (opcional)
 *     responses:
 *       200:
 *          description: Listado de posts encontrado
 *          content:
 *            application/json:
 *              schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                      id:
 *                        type: integer
 *                        example: 9
 *                      title:
 *                        type: string
 *                        example: Harry Potter
 *                      body:
 *                        type: string
 *                        example: Article talking about Harry Potter's movies
 *                      createdAt:
 *                        type: string
 *                        example: "2023-03-20T09:12:28Z"
 *                      updatedAt:
 *                        type: string
 *                        example: "2023-03-20T09:12:28Z"
 *       401:
 *          description: El token es inválido
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
 *                      example: "Token inválido"
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
 * /posts/{id}:
 *   get:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Obtiene un post específico por el id.
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: integer
 *         description: Id de post en específico
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                   id:
 *                      type: integer
 *                      example: 24
 *                   title:
 *                      type: string
 *                      example: harry potter
 *                   body:
 *                      type: string
 *                      example: articulo hablando de harry potter
 *                   createdAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *                   updatedAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *       401:
 *          description: El token es inválido
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
 *                      example: "Token inválido"
 *       404:
 *          description: Post no encontrado
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
 *                      example: "Not found"
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

/**
 * @swagger
 * /posts/:
 *   post:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Crea un post nuevo.
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      title:
 *                          type: string
 *                          required: true
 *                      body:
 *                          type: string
 *     responses:
 *       201:
 *         description: Post creado
 *         content:
 *          application/json:
 *              schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                      type: integer
 *                      example: 24
 *                   title:
 *                      type: string
 *                      example: harry potter
 *                   body:
 *                      type: string
 *                      example: articulo hablando de harry potter
 *                   createdAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *                   updatedAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *       401:
 *          description: El token es inválido
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
 *                      example: "Token inválido"
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
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Actualiza un post específico por ID.
 *     requestBody:
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      title:
 *                          type: string
 *                      body:
 *                          type: string
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Id de post en específico
 *     responses:
 *       200:
 *         description: Post actualizado
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                   id:
 *                      type: integer
 *                      example: 24
 *                   title:
 *                      type: string
 *                      example: harry potter
 *                   body:
 *                      type: string
 *                      example: articulo hablando de harry potter
 *                   createdAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *                   updatedAt:
 *                      type: string
 *                      example: "2023-06-08T01:22:02.775Z"
 *       401:
 *          description: El token es inválido
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
 *                      example: "Token inválido"
 *       404:
 *          description: Post no encontrado
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
 *                      example: "Not found"
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
 

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Borra un post específico por id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de post a borrar
 *     responses:
 *       200:
 *          description: El token es inválido
 *          content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    response:
 *                      type: boolean
 *                      example: true
 *                    message:
 *                      type: string
 *                      example: "Post borrado correctamente"
 *       401:
 *          description: El token es inválido
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
 *                      example: "Token inválido"
 *       404:
 *          description: Post no encontrado
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
 *                      example: "Not found"
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
 */

