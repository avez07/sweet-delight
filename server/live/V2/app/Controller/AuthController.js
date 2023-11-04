import express from "express";
import db from '../config/db.js';

const app = express();

const login = async (req, res) => {
  const data = req.body;
  const head = req.headers;
  console.log(data)
 

  try {
    const collection =  db.collection('user_login');
    const response = await collection.find(data).toArray();
    // res.status(200).send(response[0].);

    console.log(response); return false
    if (head.authorization == "1234567890" == response) {
    
    }
  } catch (error) {
    console.error('Error while accessing the database:', error);
    res.status(500).send('Internal Server Error');
  }
};

export default { login };
