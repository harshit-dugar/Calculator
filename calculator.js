const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
})); // parse application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post('/',(req,res)=>{
  res.send("Thanks")
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});