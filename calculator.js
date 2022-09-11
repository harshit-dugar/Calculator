const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({
  extended: true //extended: true allows for nested objects
})); // parse application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post('/',(req,res)=>{
  let num1 = Number(req.body.n1); //req.body is a object to store the num1 value
  let num2 = Number(req.body.n2); //in server

  let result = num1 + num2;
  res.send("Result is : "+result);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});