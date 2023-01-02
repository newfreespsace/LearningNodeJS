const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();
const times = 1000000;

setTimeout(() => {
  console.log("0");
}, 0);


setTimeout(() => {
  console.log("500");
}, 500);

fs.readFile("a.txt", () => {
  console.log("a");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "1 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "2 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "3 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
  crypto.pbkdf2Sync("password", "salt", times, 1024, "sha512");
  console.log(Date.now() - start, "4 Passord encrypted");
});