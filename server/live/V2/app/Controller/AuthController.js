import db from '../config/db.js';
import express from "express";

const app = express();
app.use(express.json());

// const login = async (req,res)=>{
//     const data = req.body;    
// console.log(data); return false
// db.collection('user_login').find(body).toArray();
// }
const addData = async(req,res)=>{
    let data = req.body;
    console.log(data); return false
    const db = await dbconnect();
    const collection =   db.collection('user_login')
    var response = await collection.find(data).toArray()
        res.status(200).send(response);
    }
export default {addData};