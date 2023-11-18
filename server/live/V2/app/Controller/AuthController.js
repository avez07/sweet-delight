import express from "express";
import Jwt from "jsonwebtoken";
import db from "../config/db.js";

const app = express();
const serect_key = process.env.SERECT_KEY;

const login = async (req, res) => {
  const data = req.body;
  const head = req.headers;
  try {
    const collection = db.collection("user_login");
    const response = await collection.find(data).toArray();

    if (response.length === 0) {
      res.status(201).send("User not valid");
      return false;
    }

    const { name, email, login_id, role } = response[0];
    const response_data = { name, email, login_id, role };

    const JWTToken = Jwt.sign(response_data, serect_key, { expiresIn: 86400 });
    res.status(200).send(JWTToken);
  } catch (error) {
    console.error("Error while accessing the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
const verify_token = async (req, res) => {
  const data = req.headers.authorization;
  try {
    const response = Jwt.verify(data, serect_key, true);
    res.status(200).send(response);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(201).send("Token Expired");
    } else {
      res.status(201).send("Token Not Valid");
    }
  }
};

export default { login, verify_token };
