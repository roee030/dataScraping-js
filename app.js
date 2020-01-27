const express = require('express')
const app = express()
const port = 3000
const results = require('./excelToJson')
const data = [];
const fun = require('./splitCommas')

app.get('/', (req, res) => {
    for(var i = 0 ; i < Object.keys(results.results.results).length ; i++)
    {
      data.push(results.results.results[i]["title"]+" $$ "),
      data.push(results.results.results[i]["description"].split('.')[0] +" $$ "),
      data.push(  results.results.results[i]["link"].replace('/r/','/')+'?r=aV3j1Mz'+" $$ ")
    }
  var x = fun(data)
  res.send(x)
})
app.listen(port, () => console.log(`app listening on port ${port}!`))