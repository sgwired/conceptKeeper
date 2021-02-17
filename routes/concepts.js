const express = require('express');
const router = express.Router();

// @route GET api/concepts
// @decs Get all concepts
// @acess Private
router.get('/', (req, res) => {
  res.send('Get all concepts');
});

// @route POST api/concepts
// @decs Add a concept
// @acess Private
router.post('/', (req, res) => {
  res.send('Add a concept');
});

// @route PUT api/concepts/:id
// @decs Update a concept
// @acess Private
router.put('/:id', (req, res) => {
  res.send('Update a concept');
});

// @route DELETE api/concepts/:id
// @decs Delete a concept
// @acess Private
router.delete('/:id', (req, res) => {
  res.send('Delete a concept');
});

module.exports = router;
