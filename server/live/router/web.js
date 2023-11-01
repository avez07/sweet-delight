import express from "express";
import Auth from "../V2/app/Controller/AuthController.js"
import dotenv from "dotenv";
const app = express();
const router = express.Router();
// dotenv.config();

router.post('/login',Auth.login)

export default router
