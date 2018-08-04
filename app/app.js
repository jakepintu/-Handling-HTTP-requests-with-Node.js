const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  res.write('<h1>Handling HTTP request with Node.js</h1>');

  res.end();
});

httpServer.listen(3000, () => {
  console.log('Go to http://localhost:3000 on your browser');
});
