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

// Query database only if the validation is successful and before the redirection
app.post("/getInfo_S",function(request,response){
  console.log("Sign Up Taken");
  var email = request.body.email;
  var username = request.body.myText;
  var password = request.body.password;
  console.log(request.body);
  if (!(email)||!(username)||!(password)){
      response.sendStatus(400);
      // Err0r
  } else {

    // GO TO THE DATABASE
    console.log("Reading rows from the Table...");
  // Read all rows from table
  
  // formatting of requests think tanzir terminal exec functions
  const request = new Request(
    `INSERT INTO Users (Email,Username,Password)   
    VALUES ('${email}','${username}','${password}');`,

    (err, rowCount) => {
      if (err) {
        // If there's an error, it will log it
        console.error(err.message);
      } else {
        // If there's not, then redirect
        response.redirect('create_profile.html');
      }
    }
  );

  app.post("/getInfo_C",function(request,response){
    console.log("Create Profile Taken");
    var email = request.body.email;
    var name = request.body.name_myText;
    var major = request.body.major_myText;
    var cla = request.body.class_myText;
    var hometown = request.body.hometown_Text;
    var living = request.body.living_myText;
    var interest = request.body.hobby_myText;
    var sm = request.body.sm_myText;
    var bio = request.body.bio_text;

    console.log(request.body);

    if (!(email)||!(username)||!(password)){
        response.sendStatus(400);
        // Err0r Would modify but it already handles
    } else {
  
      // GO TO THE DATABASE
      console.log("Reading rows from the Table...");
    // Read all rows from table
    
    // formatting of requests think tanzir terminal exec functions
    const request = new Request(
      `UPDATE Users 
      SET 
          Name = '${username}',
          Major = '${major}',
          Class = '${cla}',
          Hometown = '${hometown}',
          Residence = '${living}',
          Interest = '${interest}',
          'Social Media' = '${sm}',
          Biography = '${bio}',

      WHERE
          Email = '${email}';`,
  
      (err, rowCount) => {
        if (err) {
          // If there's an error, it will log it
          console.error(err.message);
        } else {
          // If there's not, then redirect
          response.redirect('match_page.html');
        }
      }
    );
  connection.execSql(request);
  // GO TO THE DATABASE
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
// Callback for connection, deb00gers
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
    `SELECT * from Users`,

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
  console.log(`Example app listening at Port :${port}`)
})


