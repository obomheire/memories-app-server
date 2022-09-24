import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
dotenv.config()
import connect from './connection/mongoConnect.js';
const app = express();
connect()
app.use(cors());

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get("/", (req, res) => { 
    res.send("Hello to Memories API")
})
const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`)
 
})

