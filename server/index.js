import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import postRoutes from './routes/posts.js'
dotenv.config()

const app = express();
app.use(cors());

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes)

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    })
  .then(() => app.listen(PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`)
    console.log('Connected to Database...')
  }))
  .catch((error) => console.log(`${error} Could not connect to DB`));