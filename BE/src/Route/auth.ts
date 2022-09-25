import express from 'express';
import {register} from "../Service";

const router = express.Router()

// Register
router.post("/register",register)
// Login
router.post("/login")

export { router as loginRouter }