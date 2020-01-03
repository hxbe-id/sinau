var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Sugeng enjing ing nodejs");
});

server.listen(8000);

console.log("servere mlaku neng http://localhost:8000");