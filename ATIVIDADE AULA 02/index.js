const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(
            './index.html',
            { encoding: 'utf-8', flag: 'r' },
            function (err, d) {
                if (!err) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(d);
                    res.end();
                }
            }
        );
    } else {
        fs.readFile(    
            './404.html',
            { encoding: 'utf-8', flag: 'r' },
            function (err, d) {
                if (!err) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(d);
                    res.end();
                }
            }
        );
    }
});

const portaDoservidor = 8080;

server.listen(portaDoservidor, () => {
    console.log(`Porta: ${portaDoservidor}!`);
});