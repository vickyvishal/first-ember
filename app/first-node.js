var mypro = require("nano")("http://vicky:ashking@localhost:5984").use("myproducts"); 
var http = require("http"); var server = http.createServer(function (request, response) { 
    var isbn = "978-0553380163"; mypro.view("myproducts", "books_by_isbn", function (err, body, header) { 
        if (err) { 
            response.writeHead(500, { "Content-Type": "text/plain" }); 
            response.end("Querying books failed. " + err + "\n"); } 
        else { 
            response.writeHead(200, { "Content-Type": "text/plain" }); 
            response.end("Books queried. Response: " + JSON.stringify(body) + "\n"); 
        } 
    }); 
}); 
 
server.listen(8000); 
console.log("Server running at http://127.0.0.1:8000/"); 
