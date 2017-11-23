var http=require("http"); //require() is used to import libraries
var port=8686;

// create a random integer function to create a random temp value
function randomInt(low,high) {
  return Math.floor(Math.random()*(high-low)+low);
}
//Create an HTTP Server and pass it a function to be called whenever
// a client sends a request
http.createServer(function(req,res){
  console.log('New incoming client request for'+req.url);
  res.writeHeader(200,{'Content-Type':'application/json'});
  switch(req.url){
    case '/temperature':
    res.write('{"temperature":'+randomInt(1,40)+'}');
    break;
    case '/light':
    res.write('{"light":'+randomInt(1,100)+'}');
    break;
    default:
    res.write('{"hello":"world"}');
  }

  res.end(); //response sent back to client
}).listen(port); //Start the HTTP server on port 8585
console.log('Server listening on http://localhost:'+port);
