var http = require('http');


function handle_incoming_request(req, res){
    console.log("Incoming request: (" + req.method + ") " + req.url);

    res.writeHead(200, { "Content-Type": "application/json"});

    if (req.url.substr(1) == "1234567")
    {
        res.write('{"product_id":"1234567","price":"$99.99"}');
    }
    else if (req.url.substr(1) == "5555555")
    {
        res.write('{"product_id":"5555555","price":"$4.99"}');
    }
    else if (req.url.substr(1) == "8888888")
    {
        res.write('{"product_id":"8888888","price":"$19.99"}');
    }
    else
    {
        res.write("Product not found");
    }

    res.end();

}

var s = http.createServer(handle_incoming_request);
s.listen(8080);
