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
    console.log('Node js is working with express and it is started at port 3000')
});

/* Started DB work | Mongoose */

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manal:manal1@cluster0-rxt2l.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('We are connected with mongoDB ATLAS with mongoos')

});

// Mongoose Schema

var usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
});

var all_users = mongoose.model('users', usersSchema); // creates a document (node) of users

/* this is a object which going to save in mongoDB */
// var new_user = new all_users({
//     name: 'Jennifer Lopez',
//     email: 'jennifer@gmail.com',
//     age: 29,
//     password: '112233'
// });

/* saving to db */
// new_user.save((err,user)=>{
//     if(err) return console.log(err);
//     user;
// })

/* searching from db_document of 'users'(node) */
all_users.find(function (err, find_user) {
    if (err) return console.error(err);
    console.log(find_user[0].email);
})