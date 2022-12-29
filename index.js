const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const data = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'));
const overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  
  const {query, pathname} = url.parse(req.url, true);
  console.log(req.url);
  console.log(query, pathname);

  if (pathName === '/overview') {

    let product_cards = '';
    data.forEach(element => {
      product_cards += card
                    .replace(/{%IMAGE%}/g, element.image)
                    .replace(/{%PRODUCTNAME%}/g, element.productName)
                    .replace(/{%QUANTITY%}/g, element.quantity)
                    .replace(/{%PRICE%}/g, element.price)
                    .replace(/{%ID%}/g, element.id);

    }); 

    let t = overview.replace('{%PRODUCT_CARDS%}', product_cards);
    res.end(t);
    
  // Product page
  } else if (pathName === '/product') {
    

  // API
  } else if (pathName === '/api') {
    res.writeHead(200, { 'content-type': 'application/json'} );
    res.end(data);
  
  // NOT FOUND
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});