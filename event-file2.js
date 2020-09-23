var fs = require('fs');
fs.readFile('To_Read.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
//Change test.sh file echo to 100%, create a file To_Read.txt & type industry in it
