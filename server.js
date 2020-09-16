const circle = require('./public/funcs.js');
var express = require('express');
var app = express();

var port = 3000;
app.listen(port);
console.log(port);

app.use(express.static(__dirname + '/public'));

 app.get('/adder',function(req,res){
   var num1=parseInt(req.query.num1);
   var num2=parseInt(req.query.num2);
   var result=circle.adder(num1,num2)
   res.send('the result ' +result)
 })
 app.get('/arr',function(req,res){
  var result=circle.arr(); 
  res.send('the result:   ' +result);
 })
  
