const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT|5000
app.use(cors());

const categories = require('./Data/Categories.json')
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log('News server running on',port)
})