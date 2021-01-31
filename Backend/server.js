const express = require('express');
const app = express();
const fs = require('fs');


var count = 0;

app.get("/signup/:name/:email/:Password/:Phone", function(req, res){
count++;
    var user = {
        Name: req.params.name,
        Email: req.params.email,
        Password: req.params.Password,
        Phone: req.params.Phone
              }
    var k = JSON.stringify(user);


    fs.appendFile("Details.txt",  k + "\n" ,(err)=>{
          if(err)
          console.log(err)
          else{
            console.log(count, " Users Registered")
          }
            
        
    } )




})

app.listen(3000, function(error){
    if(error)
    console.log(error)
    else
    {
        console.log("Server Running");
    }
})