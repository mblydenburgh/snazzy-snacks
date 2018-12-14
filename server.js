var express = require('express');
var path = require('path');
const mysql = require('promise-mysql');
require('dotenv').config()
const dbPass = process.env.DB_PASS;


function queryReservations(){
    return mysql.createConnection({
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
        return data;
    })
}

function queryWaitlist(){
    return mysql.createConnection({
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
        return data;
    })
}

function addReservation(postData){
    const {name,phoneNumber,email,uniqueID} = postData;
    mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:dbPass,
        database:"snazzy_db"
    })
    .then(async function(connection){
        let currentReservations = connection.query(`SELECT * FROM reservations`);
        if(currentReservations.length < 6){
            //add to reservations
            let data = await connection.query(`INSERT INTO reservations (name,phone,email,unique_id)
        VALUES (?,?,?,?)`,[name,phoneNumber,email,uniqueID]);
        return data;
        }
        else{
            //add to waitlist
        }
        
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

app.get('/api/tables', function (req,res) {
    // console.log(res);
    // res.send({})
    queryReservations()
    .then(data=>res.send(data));
    // return res.send(queryReservations());
});

app.get('/api/waitlist', function (req, res) {
    queryWaitlist()
    .then(data=>res.send(data));
});

app.post('/reserve', function (req, res) {
    let data = req.body
    console.log(data);
    addReservation(data);
})

app.listen(3000, function () {
    console.log('App listening on PORT ' + 3000)
});