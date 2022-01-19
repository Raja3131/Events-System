import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import EventsRouter from './src/routes/EventsRoutes.js'
import ManagerRouter from './src/routes/ManagerRoutes.js'
import PromoterRouter from './src/routes/PromoterRoutes.js'
import EventSchema from './src/models/EventModel.js';

import LocationRouter from './src/routes/LocationRoutes.js'

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())

const PORT = process.env.PORT || 5000;
const DB= 'mongodb://localhost:27017/events'

mongoose.connect(DB,{ useNewUrlParser: true,useUnifiedTopology: true })
.then((app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})))
.catch(err => console.log(err))

app.use('/events',EventsRouter)
app.use('/managers',ManagerRouter)
app.use('/promoters',PromoterRouter)


<<<<<<< HEAD
let Result=await EventSchema.find({name:'India'})
// console.log(Result)
=======
>>>>>>> 0b95cbb54ed63a5c63190a1bea67f7b5dd3eb926
app.use('/locations',LocationRouter)

// import { MongoClient } from "mongodb"
// const databaseName = "events";
// const URL= 'mongodb://localhost:27017'
  
// MongoClient.connect(URL).then((client) => {
//    const connect = client.db(databaseName)
//    connect.collection("location").find({states:{$elemMatch:{name : "Tamil Nadu"}}}).toArray(function(err, result) {
//       console.log(result);
//       client.close();
//     });
// }).catch((err) => {
//     console.log(err.Message);
// })
