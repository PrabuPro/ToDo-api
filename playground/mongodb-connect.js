const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    client.close();
})