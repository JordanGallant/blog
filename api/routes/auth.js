import express  from "express";
import { register } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";
import { logout } from "../controllers/auth.js";

const router = express.Router()
router.post("/auth/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router;