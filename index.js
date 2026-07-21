import dotenv from 'dotenv';
dotenv.config();
import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

async function startServer() {
  try {
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
  } catch (err) {
    console.log("🤖 Oh no something went wrong", err);
  }
}

startServer();