var mysqpl = require('mysql'); //some variables
var express = require('express');
var app = express();

// To get localhost:8000/
app.get('/', function(request,response){
    fetchData(response);
    console.log('Done! Data Displayed!');
});

//To connect with the DataBase

var db = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: '**********',
    database: 'tnp'
});

// now we have to create connection

db.connect(function(err){
    if (err) {throw err;}
    console.log("Connected to the Database!");
})

//---------------Functions-Start-------------------

function exectuteQuery(sql,cb){
    db.query(sql,function(error,result,fields){
        if (error) {
        throw error;
        }
        cb(result);
    })
}
    //any function is cb 

function fetchData(response){
    exectuteQuery("Select * from Admin", function(result){
        console.log(result);
        response.write('<table><tr>');
        for(var column in result[0]){
            response.write('<td><label>' + column + '</label></td>');
            response.write('</tr>');
        }
        for(var row in result){
            response.write('<tr>');
            for( var column in result[row]){
                response.write('<td><label' + result[row][column] + '</label></td>');
            }
            response.write('</tr>');
        }
        response.end('</table>');
    });
}

//--------------Functions-End---------------------

app.listen(80,function(){
    console.log('Listening to Port 80')
})
