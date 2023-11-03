import express from "express";
import db from '../config/db.js';

const app = express();

const login = async (req, res) => {
  const data = req.body;
  const head = req.headers;
  console.log(head); return false

  try {
    const collection = db.collection('user_login');
    const response = await collection.find(data).toArray();
    res.status(200).send(response);
  } catch (error) {
    console.error('Error while accessing the database:', error);
    res.status(500).send('Internal Server Error');
  }
};

export default { login };
