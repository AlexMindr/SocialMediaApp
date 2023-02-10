import { Router } from "express";
import { signup,login } from "../controllers/users.js";

const router = Router()

router.post('/signin',signup)
router.post('/login',login)

export default router;