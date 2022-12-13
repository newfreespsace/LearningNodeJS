#### ./ 和 __dirname
* ./ 表示运行程序的位置
* __dirname 表示程序所在的目录



```javascript
const productData = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'));
res.writeHead(200, { 'content-type': 'application/json'} );
res.end(productData);
```