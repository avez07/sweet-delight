import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const url = process.env.MONGODB_URI;

const db = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connection) => {
    
    console.log('Connected to MongoDB');
    return connection; // You can return the connection if needed.
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    throw err; // Rethrow the error to handle it elsewhere if necessary.
  });
  const connection = await db; 
  const dbClient = connection.connection.db;


export default dbClient;
