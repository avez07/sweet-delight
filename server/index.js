import  express from "express";
import dotenv from "dotenv";
import router from "./live/router/web.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:["https://sweetdelight.netlify.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
const port = process.env.PORT;

app.use('/api',router);
app.listen(port);

