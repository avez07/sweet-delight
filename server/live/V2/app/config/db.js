import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const url = process.env.Mongourl;

const db = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

export default db;


