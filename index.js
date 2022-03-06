const express = require('express')
const app = express()
bodyParser = require('body-parser');
const mysql = require('mysql')



const connection = mysql.createPool({
  host     : 'localhost', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '',        // Your database's password.
  database : 'my_db'   // Your database's name.
});
;

app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});

app.get('/',(req,res,next)=>{
    res.send('kjbiusriu')
})
//godwin@akinfopark.com