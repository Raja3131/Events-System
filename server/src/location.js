import { MongoClient } from "mongodb"
const databaseName = "events";
const URL= 'mongodb://localhost:27017'
  
MongoClient.connect(URL).then((client) => {
   const connect = client.db(databaseName)
   connect.collection("location").find({EmployeeDetails:{$elemMatch:{EmployeePerformanceArea : "C++", Year : 1998}}}).toArray(function(err, result) {
      console.log(result);
      client.close();
    });
}).catch((err) => {
    console.log(err.Message);
})

// var MongoClient=require('mongodb').MongoClient;
// var url='mongodb://localhost:27017';

// MongoClient.connect(url,function(err,db){
//     if(err)throw err;
//     var mydb=db.getCollection('location').find({name:'India'});
//         console.log(mydb)
//         db.close();
// })

