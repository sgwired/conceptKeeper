const express = require('express');
const router = express.Router();

// @route POST api/users
// @decs Register  user
// @acess Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
