/*
HTML content:

<!DOCTYPE html>
<html>
  <body>
    <h2>Welcome! what would you like to have</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>

*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {

    fs.readFile("Sample.html", function (error, data) {
        if (error) {
            resp.writeHead(404);
            resp.write('Not found');
            resp.end();
        } else {
            resp.writeHead(200, {
                'Content-Type': 'text/html'
            });
            resp.write(data.toString());
            resp.end();
        }
    });
});

server.listen(8000, '127.0.0.1');
