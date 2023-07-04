import { Router } from "express";
import PostController from "../Controllers/PostController.js";

const router = Router()

router.get('/posts',PostController.all);

router.get('/post/:slug',PostController.findBySlug)

export default router