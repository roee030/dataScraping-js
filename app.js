const express = require('express')
const app = express()
const port = 3000
const results = require('./excelToJson')
const data = [];

app.get('/', (req, res) => {
    for(var i = 0 ; i < Object.keys(results.results.results).length ; i++)
    {
        data.push(results.results.results[i]["title"]),
        data.push(results.results.results[i]["description"].split('.')[0]),
        data.push(results.results.results[i]["link"])
       
        
        }
  res.send(data)
})

app.listen(port, () => console.log(`app listening on port ${port}!`))