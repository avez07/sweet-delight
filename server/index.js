import  express from "express";
import dotenv from "dotenv";
import router from "./live/router/web.js";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use('/api',router);
app.listen(port);

