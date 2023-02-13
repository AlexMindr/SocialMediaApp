import { Router } from "express";
import { getStories,createStory,updateStory,deleteStory,likeStory } from "../controllers/stories.js";
import auth from "../middlewares/auth.js";

const router = Router()

router.get("/", getStories)
router.post("/", auth, createStory)
router.patch("/:id", auth, updateStory)
router.patch("/:id/like", auth, likeStory)
router.delete("/:id", auth, deleteStory)

export default router;