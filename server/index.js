import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import EventsRouter from './src/routes/EventsRoutes.js'
import ManagerRouter from './src/routes/ManagerRoutes.js'
import PromoterRouter from './src/routes/PromoterRoutes.js'


const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())



const PORT = process.env.PORT || 5000;
const DB= 'mongodb://localhost:27017/events'

mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true })
.then((app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})))
.catch(err => console.log(err))

app.use('/events',EventsRouter)
app.use('/managers',ManagerRouter)
app.use('/promoters',PromoterRouter)