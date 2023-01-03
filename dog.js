const fs = require("fs");
const superAgent = require("superagent");

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(new Error("I could not find that file."));
      resolve(data);
    }); 
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(err);
      resolve('Random dog image saved to file!');
    });
  });
};


// 
//   .then(data => { return  })
//   .then(res => { return  })
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err.message));

const getDogPic = async () => {
  try {
    // const data = await readFilePro(`${__dirname}/dog.txt`);
    data = fs.readFileSync(`${__dirname}/dog.txt`);
    console.log(data);
    const res = await superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    // const msg = await writeFilePro('dog-img.txt', res.body.message);
    fs.writeFileSync('dog-img.txt', res.body.message);
    console.log("abcd");
  } catch (err) {
    console.log(err);
  }
};

console.log("1: Will getg dog pics!");
getDogPic();
console.log("2: Done getting dog pics!");


