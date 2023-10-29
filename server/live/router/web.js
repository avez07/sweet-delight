import express from "express";
import Auth from "../V2/app/Controller/AuthController.js"
import dotenv from "dotenv";
const app = express();
app.use(express.json());
const router = express.Router();
dotenv.config();

router.get('/login',Auth.addData)

export default router
