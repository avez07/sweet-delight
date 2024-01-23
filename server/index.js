import express from 'express';
import dotenv from 'dotenv';
import router from './live/router/web.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Use a specific route for the API
app.use('/api', router);
// console.log(process.env.MONGODB_URI)

// Handle other routes or methods here if needed
app.post('*', (req, res) => {
  res.json('hello world');
});
app.listen(process.env.PORT)
// Export the Express app for Vercel
export default app;
