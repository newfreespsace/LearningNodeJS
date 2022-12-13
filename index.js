const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  console.log(data);
});