import express from "express";
import dotenv from "dotenv";
import Auth from "../V2/app/Controller/AuthController.js"
const app = express();
const router = express.Router();
dotenv.config();
app.use(express.json());

router.post('/login',Auth)
export default router
