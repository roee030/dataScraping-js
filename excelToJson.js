const csv = require('csv-parser')
const fs = require('fs')
const results = [];
var lengthOfObject = 0 ;
fs.createReadStream('test1.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
  });




exports.results = {results,lengthOfObject}
