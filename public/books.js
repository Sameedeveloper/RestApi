const express = require('express')
const router = express.Router()
const books = require('./books.json')

// Get all the books
router.get('/', (req, res) => {
  res.json(books)
})

// Get a specific book
router.get('/:year', (req, res) => {
  const { year } = req.params
  res.json(books.filter((ele) => ele.year === parseInt(year)))
})

router.post('/', (req, res) => {
  const body = req.body
  console.log(body)
  books.push(body)
  res.json({ message: 'The book has been added' })
})

router.put('/:year', (req, res) => {
  const { year } = req.params
  const body = req.body
  books.forEach((book, index) => {
    if (book.year === parseInt(year)) {
      books[index] = body
    }
  })
  res.json({ message: `The book with ID ${year} has been updated` })
  // res.json(books);
})

router.delete('/:year', (req, res) => {
  const { year } = req.params
  books.forEach((book, index) => {
    if (book.year === parseInt(year)) {
      books.splice(index)
    }
  })
  res.json({ message: `Book with id #${year} has been deleted` })
})

module.exports = router
