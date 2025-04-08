const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
  bp: {
    type: Number,
    required: true,
  },
  heart_rate: {
    type: Number,
    required: true,
  },
  sugar: {
    type: Number,
    required: true,
  },
  colestroll: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("health", healthSchema);
