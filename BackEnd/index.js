const express = require('express')
var mysql = require('mysql');
// var bodyParser = require('body-parser');
var multer = require('multer');
// Find express that was installed and refer to it as variable express - Joshi
const path = require('path')
const app = express()
var upload = multer();
const port = 80


// HTTP is on 80 we don't want to worry about Secure - Joshi

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/


// for parsing application/json
// app.use(bodyParser.json()); 


// for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// Can I send a body with a get request?
// A : Don't send form data as a get request. But you can do funky business with it.

// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static(path.join(__dirname, "../FrontEnd")))

app.post("/getInfo",function(request,response){
  console.log("Sign Up Taken");
  var email = request.body.email;
  var username = request.body.myText;
  var password = request.body.password;
  console.log(request.body);
  if (!(email)||!(username)||!(password)){
      response.sendStatus(400);
      // Err0r
  } else {
    response.redirect('create_profile.html');
      //Succ cess
  }
})





const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "taggies", // update me
      password: "password1!" // update me
    },
    type: "default"
  },
  server: "taggies-db-server.database.windows.net", // update me
  options: {
    database: "Taggies_DataBase", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  
  // formatting of requests think tanzir terminal exec functions
  const request = new Request(
    `SELECT * `,

    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}


// Get Request first arguement is the request ^ 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


