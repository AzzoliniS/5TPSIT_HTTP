//importo il modulo htto di Node.js
const http = require('http');
const url = require('url');
const querystring = require('querystring');

//definisco hostname e porta su cui il server rimane in ascolto
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

var page = url.parse(req.url).pathname;
var qstr = url.parse(req.url).query;

// Gestione della richiesta per l'URL '/'
server.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Benvenuto!');
  }
  else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write("<html><body>")
    res.write("<p>Ciao</p>");
    res.write("</body></html>");
    res.end();
  }
});

//avvia l'ascolto del server su porta e hostname (superfluo) specificato
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
