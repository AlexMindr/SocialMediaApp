import { Router } from "express";
import { getStories,createStories } from "../controllers/stories.js";
const router = Router()

router.get("/", getStories)
router.post("/", createStories)
// router.get("/", getStories)
//router.get("/", getStories)

export default router;