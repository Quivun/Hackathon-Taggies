var express = require("express");
var app = express();
// Use the application off of express
const port = 80
app.get("/", function(request,response){
    response.sendFile(__dirname+"../FrontEnd/signup.html");
    // Api takes a request in and shunts something back.
});

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
app.listen(port, () => {
    console.log(`Example app listening at Port : ${port}`)
  })