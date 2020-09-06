const express = require('express')
var mysql = require('mysql');
// Find express that was installed and refer to it as variable express - Joshi
const path = require('path')
const app = express()
const port = 80
// HTTP is on 80 we don't want to worry about Secure - Joshi

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.use(express.static(path.join(__dirname, "../FrontEnd")))

app.get("/getInfo",function(request,response){

  var email = request.query.email;
  var username = request.query.myText;
  var password = request.query.password;

  if (!(email)||!(username)||!(password)){
      response.sendStatus(400);
      // Err0r
  } else {
      response.sendStatus(200);
      //Succ cess
  }
})
// Get Request first arguement is the request ^ 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})