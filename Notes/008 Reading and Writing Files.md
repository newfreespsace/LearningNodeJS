### 读取文件
#### 同步版本 
```javascript
const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
```
第一个参数为文件路径，第二个参数为字符编码
#### 异步版本



### 写入文件
#### 同步版本
```javascript
const textOut = 'Some Message';
fs.writeFileSync('./txt/output.txt', textOut);
```