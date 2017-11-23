

var http=require("http"); //require() is used to import libraries
//Create an HTTP Server and pass it a function to be called whenever
// a client sends a request
http.createServer(function(req,res){
//write the response beginning with the HTTP headers
  res.writeHeader(200,{'Content-Type':'text/plain'});
  res.end('Hello World'); //response sent back to client
}).listen(8585); //Start the HTTP server on port 8585
console.log('Server Started!');
