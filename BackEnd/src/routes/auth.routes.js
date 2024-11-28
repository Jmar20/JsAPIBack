import { Router } from "express";
import {register,login, logout, profile} from '../controllers/auth.controllers.js'
import { authRequired } from "../middlewares/ValidateToken.js";
import { validateAuth} from "../middlewares/ValidateAuth.js";

const router= Router()

router.post('/register', validateAuth,register)
router.post('/login', validateAuth, login)
router.post('logout',logout)

export default router