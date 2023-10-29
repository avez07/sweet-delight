import  express from "express";
import dotenv from "dotenv";
import router from "./live/router/web.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use('/api',router);
app.listen(port);

