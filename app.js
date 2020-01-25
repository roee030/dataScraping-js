const express = require('express')
const app = express()
const port = 3000
const results = require('./excelToJson')
const data = [];

app.get('/', (req, res) => {
    
    
    for(var i = 0 ; i < 50 ; i++)
    {
        data.push(results.results.results[i]["title"])
    }
  res.send(data)
})

app.listen(port, () => console.log(`app listening on port ${port}!`))