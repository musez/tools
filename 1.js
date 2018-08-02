var http = require("http");
var url = require("url")

/*
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world!!");
    response.end();
}).listen(8888);
*/

/*
function onRequest(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world!!");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");
*/

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        var pahtname = url.parse(request.url).pathname;
        console.log("request for" + pahtname + "received.");
        route(pahtname)

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello world!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
}

exports.start = start;