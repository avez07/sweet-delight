import  express from "express";
import dotenv from "dotenv";
// import router from "./live/router/web.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.json('hello world')
})
// app.use('/api',router);
app.listen(port);

