import { Router } from "express";
import PostController from "../Controllers/PostController.js";

const router = Router()

router.get('/posts',PostController.all);

export default router