//  const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
     if (err) {
         return console.log('unable to connect to mongodb server');
     }
     console.log('Connected to mongodb server');
     const db = client.db('TodoApp');

    //  //querying by data
    //  db.collection('Todos').find({text: 'something to do'}).toArray().then((docs) => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //  }, (err) => {
    //      console.log('Unable to fetch Todos',err);
    //  });

    //  //query by ID
    //  db.collection('Todos').find({
    //      _id: new ObjectID('5bbd149b967b155de019fa24')
    //  }).toArray().then((docs) => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //  }, (err) => {
    //      console.log('Unable to fetch Todos',err);
    //  });


     db.collection('Todos').find().count().then((count) => {
          console.log(`Todos Count: ${count}`);
     }, (err) => {
         console.log('Unable to fetch Todos',err);
     });


    //  client.close();
 })