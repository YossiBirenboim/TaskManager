import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import taskRout from './routs/taskRout.js'
 

import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGODB_URL)

.then(() => console.log('mongoDB is connected'))
.catch(err => console.log('mongoDB err', err))


const app = express()
app.use(express.json())
app.use(cors())
 

app.use('/task', taskRout)

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))