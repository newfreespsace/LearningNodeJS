const fs = require("fs");

function get_bc() {
  let a, b, c;
  if (Math.random() > 0.2) {
    c = Math.round(Math.random() * 20);
  } else {
    c = Math.round(Math.random() * 10);
  }
  b = Math.round(Math.random() * 10);
  if (b > c) { let tmp = b; b = c; c = tmp; }
  return {b, c};
}


function get_three() {
  while (true) {
    let a = Math.round(Math.random() * 20);
    let b = Math.round(Math.random() * 20);
    let c = Math.round(Math.random() * 20);
    let op1 = Math.round(Math.random()) * 2 - 1;
    let op2 = Math.round(Math.random()) * 2 - 1;
    let x, y;
    if (op1 === -1) x = a - b;
    else x = a + b;
    if (x < 0 || x > 20) continue;
    if (op2 === -1) y = x - c;
    else y = x + c;
    if (y < 0 || y > 20) continue;
    return {a, op1, b, op2, c};
  }
}


const writeable = fs.createWriteStream(`${__dirname}/out.md`);
writeable.write("|   |    |    |    |    |\n");
writeable.write("|  ----  | ----  | ----  | ----  | ----  |\n");

for (let i = 1; i <= 16 * 5; i++) {
  let {b, c} = get_bc();
  if (Math.random() > 0.5) writeable.write(`|$${c - b} + ${b}=$`);
  else writeable.write(`|$${c} - ${b}=$`);
  if (i % 5 === 0) writeable.write("|\n");
}

for (let i = 1; i <= 4 * 5; i++) {
  let {b, c} = get_bc();
  let t = Math.random() > 0.75; 
  if (t > 0.75)      writeable.write(`|$(\\quad\\quad) + ${b}=${c}$`);
  else if (t > 0.5)  writeable.write(`|$${c - b} + (\\quad\\quad)=${c}$`);
  else if (t > 0.25) writeable.write(`|$${c} - (\\quad\\quad)=${b}$`);
  else               writeable.write(`|$(\\quad\\quad) - ${b}=${c-b}$`);
  if (i % 5 === 0) writeable.write("|\n");
}

for (let i = 1; i <= 4 * 5; i++) {
  let {a, op1, b, op2, c} = get_three();
  writeable.write(`|$${a} ${op1 > 0 ? '+' : '-'} ${b} ${op2 > 0 ? '+' : '-'} ${c}=$`);
  if (i % 5 === 0) writeable.write("|\n");
}