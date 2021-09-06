const express = require('express')
const port = process.env.PORT || 5000
const books = require('./public/books')

const app = express()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/books', books)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
