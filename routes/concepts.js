const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const config = require('config');

const User = require('../models/User');
const Concept = require('../models/Concept');

// @route GET api/concepts
// @decs Get all concepts
// @acess Private
router.get('/', auth, async (req, res) => {
  try {
    const concepts = await Concept.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(concepts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Eror');
  }
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
