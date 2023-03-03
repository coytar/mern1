const express = require("express");
const router = express.Router();

// Load Employee model
const Employee = require('../../models/employee');

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Employee.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ error: 'No Employees found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ error: 'No Employee found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Employee.create(req.body)
    .then(book => res.json({ msg: 'Employee added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Employee entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a employee' }));
});

module.exports = router;