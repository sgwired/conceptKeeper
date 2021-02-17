const mongoose = require('mongoose');

const ConceptSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  patent: {
    type: String,
    default: 'has patent',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('concept', ConceptSchema);
