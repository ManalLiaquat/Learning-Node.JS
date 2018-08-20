var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<center><h1>Welcome to home page</h1></center>');
});
app.get('/about', function (req, res) {
  res.send('<center><h3>This is a about page</h3></center>');
});
app.get('/contact', function (req, res) {
  res.send(`<center><h3>This is a contact page</h3></center>`);
});
app.get('/:something', function (req, res) {
  res.send('<center><h4 style="color:red; text-transform:uppercase">404 page not found...</h4></center>');
});

app.listen(3000, () => {
  console.log('Node js is working with express')
});

/* ======== MONGO-DB ======== */

var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://manal:manal1@ds225382.mlab.com:25382/todo-789'; // mlab connection 

MongoClient.connect(url, (err, client) => {

  console.log("Connected successfully to mongoDB server");

  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  var db = client.db('todo-789');
  // console.log(dbm)

  db.collection('users').insertOne(
    {
      name: 'John Dou',
      email: 'john@gmail.com',
      age: 21,
      password: '123123'  
    });
  client.close();
});

// comment

// var assert = require('assert');

// const url = 'mongodb://localhost:27017';
// Database Name
// const dbName = 'users';

// Use connect method to connect to the server

// MongoClient.connect(url, (err, client) => {
//   assert.equal(null, err);
//   console.log("Connected successfully to mongoDB server");

//   const db = client.db(dbName);

//   // console.log(db);

//   client.close();
// });

