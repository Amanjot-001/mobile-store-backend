import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});