const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const lengthOfObject = 0 ;
fs.createReadStream('test1.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(typeof(data));
  });




exports.results = {results,lengthOfObject}
