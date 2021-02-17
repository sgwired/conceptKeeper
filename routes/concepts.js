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
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Please enter a conept name').not().isEmpty(),
      check('description', 'Please enter a description of the concept')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, patent } = req.body;

    try {
      const newConcept = new Concept({
        title,
        description,
        patent,
        user: req.user.id,
      });
      const concept = await newConcept.save();

      res.json(concept);
    } catch (error) {
      console.error('there was an error');
    }
  }
);

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
