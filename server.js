var express = require('express');
var path = require('path');
const mysql = require('promise-mysql');
require('dotenv').config()
const dbPass = process.env.DB_PASS;


function queryReservations(){
    mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"#SadieMombo1114",
        database:"snazzy_db"
    })
    .then(async function(connection){
        let data = await connection.query(`SELECT * FROM reservations`);
        return data;
    })
    .then(function(data){
        console.log(data);
    })
}

function queryWaitlist(){
    mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"#SadieMombo1114",
        database:"snazzy_db"
    })
    .then(async function(connection){
        let data = await connection.query(`SELECT * FROM waitlist`);
        return data;
    })
    .then(function(data){
        console.log(data);
    })
}

function addReservation(){
    mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:dbPass,
        database:"snazzy_db"
    })
    .then(async function(connection){
        let data = await connection.query(`INSERT INTO reservations (name,phone,email,unique_id)
        VALUES (?,?,?,?)`,[]);
        return data;
    })
    .then(function(data){
        console.log(data);
    })
}

function addWaitList(){
    
}


var app = express();
var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/api/tables', function (res, req) {
    return (queryReservations())
});

app.get('/api/waitlist', function (res, req) {
    return res.json(queryWaitlist());
});

app.listen(3000, function () {
    console.log('App listening on PORT ' + 3000)
});