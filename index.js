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