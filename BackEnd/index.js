const express = require('express')
var mysql = require('mysql');
var bodyParser = require('body-parser');
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
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static(path.join(__dirname, "../FrontEnd")))

app.get("/getInfo",function(request,response){
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
// Get Request first arguement is the request ^ 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})