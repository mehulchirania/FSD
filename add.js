const process = require('process');
let sum = 0;
var args = process.argv.slice(2);
sum = Number(args[1]) + Number(args[0]);
console.log(sum);