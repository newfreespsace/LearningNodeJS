const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const string = 'abcd';

const t1 = bcrypt.hashSync(string, 10);
const t2 = bcrypt.hashSync(string, 10);

console.log(t1);
console.log(t2);

const res = bcrypt.compareSync(t2, 'abcd');
console.log(res);

