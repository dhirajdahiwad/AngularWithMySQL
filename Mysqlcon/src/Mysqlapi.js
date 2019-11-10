
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect my db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodeuser',
    password: 'nodeuser@1234',
    database: 'dbname'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

app.get('/', function (req, res) {
    res.send('Hello World!');
    });

    // Port that will be listened
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });

  
    var server = app.listen(3000, "127.0.0.1", function () {
     
      var host = server.address().address
      var port = server.address().port
     
      console.log("Example app listening at http://%s:%s", host, port)
     
    });

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    //rest api to get all customers
app.get('/customer', function (req, res) {
    connection.query('select * from customer', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //rest api to create a new customer record into mysql database
app.post('/customer', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //rest api to update record into mysql database
app.put('/customer', function (req, res) {
    connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 
//rest api to delete record from mysql database
app.delete('/customer', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });
 