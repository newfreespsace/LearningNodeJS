const http = require('http');
const fs = require('fs');

const productData = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'));

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'content-type': 'application/json'} );
    res.end(productData);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'aaa'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});