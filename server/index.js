import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import Router from './src/routes/Events.js'

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())



const PORT = process.env.PORT || 5000;
const DB= 'mongodb://localhost:27017/events'

mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true })
.then((app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})))
.catch(err => console.log(err))

app.use('/',Router)