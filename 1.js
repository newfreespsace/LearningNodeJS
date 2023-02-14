const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { promisify } = require('util');


dotenv.config({ path: './config.env' });

const Token = jwt.sign({'id': 3}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

console.log(Token);



let f = async () => {
    const decoded =  await promisify(jwt.verify)(Token, 'my-secret-string') ;
    console.log(decoded);
}

f();