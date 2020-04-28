const fs = require('fs');
let file=fs.readFileSync(process.argv[2]).toString();
let lines = file.split("\n").length;
lines--;
console.log(lines);
