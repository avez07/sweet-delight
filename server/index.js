import express from 'express';
import dotenv from 'dotenv';
import router from './live/router/web.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Use a specific route for the API
// app.use('/api', router);

// Handle other routes or methods here if needed
app.all('*', (req, res) => {
  res.json({ message: 'Not Found' });
});

// Export the Express app for Vercel
export default app;
