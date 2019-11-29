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

// const fs = require('fs');
// fs.readFile('index.js', function(err, data) {
//   if (err) { return console.log(err); }
//   else { return data; }
// });