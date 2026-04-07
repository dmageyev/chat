const http =  require ('http');
const fs = require('fs');
const path = require('path');

const pathToIndex = path.join(__dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);


const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(indexHtmlFile);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }

});

server.listen(3000);