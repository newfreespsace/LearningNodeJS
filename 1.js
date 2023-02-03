const string = 'E11000 duplicate key error collection: natours.tours index: name_1 dup key: { name: \"The Northern Lights\" }';
const regex = /"([^"]*)"/;
const match = string.match(regex);
console.log(match[1]);
// Output: "The Northern Lights"