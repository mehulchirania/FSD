//app.js
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
    input: fs.createReadStream('module.js')
});

var lineno = 0;
myInterface.on('line', function (line) {
    lineno++;
    console.log(line);
});

//module.js
function myFunc() {
    const process = require('process');
    let sum = 0, mult = 0;
    var args = process.argv.slice(2);
    sum = Number(args[1]) + Number(args[0]);
    mult = Number(args[1]) * Number(args[0]);
    console.log(sum);
    console.log(mult);
}
module.exports.myFunc = myFunc;