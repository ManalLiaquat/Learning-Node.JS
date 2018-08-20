
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = 'mongodb+srv://manal:manal1@cluster0-rxt2l.mongodb.net/test?retryWrites=true';
MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
    if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    }
    console.log('MongoDB ATLAS Connected...');
    const collection = client.db("test").collection("users");
    collection.insertOne({
        name: 'Perry Carter',
        email: 'perry@gmail.com',
        age: 19,
        password: '890890'
    });
    // perform actions on the collection object
    client.close();
});