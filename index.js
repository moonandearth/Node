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
const fs = require('fs');
fs.readFile('index.js', function(err, data) {
  if (err) { return console.log(err); }
  else { return data; }
});