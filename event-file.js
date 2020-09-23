//Create a folder manually called Node_folder & write this code in app.js

var fs = require('fs');
var dir = './Node_folder';

fs.writeFile('Node_folder/sample.txt', 'This is Node.js a powerful backend javascript used very widely in industry for developing web applications.', function (err) {
    if (err) throw err;
}
)
