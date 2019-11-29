var sum = function(a, b) {
  return a + b;
}
var mul = function(a, b) {
  return a * b;
}
var summul = function(a, b) {
  console.log(sum(a, b));
  console.log(mul(a, b));

}
summul(2,5);

let m = mul(2,5);

console.log(mul(5,function(){return 4;}));

console.log("product is :",m);
console.log("product is : %d",m);

var d = function(a,b){return a/b;}(5,2);
console.log("Division is ",d);
//section 1
function execute (a,b,method){
  return method(a,b);
}
console.log("sum is ", execute(5,3,sum));
console.log("Product is ",execute(5,3,mul));
// section 2
function square (num, callback){
  let res = num*num;
  callback(res);
}
square(4, function (result){return console.log("square is",result);
console.log("I am located after the return")});
//section 3
const fs = require("fs");


let promise = new Promise( function (resolve, reject) {
  fs.readFile("code.js","utf-8",function (err,data)
    {
      if(err) reject(err);
      else resolve(data);
    });
});
promise.then(function (data){
  
  console.log(data)

  ;}).catch(function (err){

  console.log(err);})
// section 4
  var http = require('http');
  http.createServer( function (req,res)
  {
      res.writeHead(200,{'Content-Type':'text/plain'});
      if(req.url == '/about')
      {
        res.write('Hello World !');
      }
      else{
        res.write("hello");
      }
      res.end();
    }
  ).listen(8000);
  console.log('listening on port 8080');

  const express = require('express');
  const app = express();
  app.get('/', function (req, res){

    res.send('http://www.google.com')
  });
  app.listen(3000);

  // other way of writing function

  var sm = (a,b) => { return a+b;}