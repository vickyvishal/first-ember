var nano = require("nano")("http://vicky:ashking@localhost:5984"); 
var http = require("http"); 
var server = http.createServer(function (request, response) { 
    var book = { 
        Title: "A Brief History of Time", 
        Author: "Stephen Hawking", 
        Type: "Paperback – Unabridged, September 1, 1998", 
        ISBN: "978-0553380163"
    }; 
     
    nano.use("mylibrary").insert(book, book.ISBN, function(err, body, header) { 
        if(err) { 
            response.writeHead(500, { "Content-Type": "text/plain" }); 
            response.end("Inserting book failed. " + err + "\n"); 
        } else { 
            response.writeHead(200, { "Content-Type": "text/plain" }); 
            response.end("Book inserted. Response: " + JSON.stringify(body) + "\n"); 
        } 
    }); 
}); 
 
server.listen(8000); 
console.log("Server running at http://127.0.0.1:8000/"); 