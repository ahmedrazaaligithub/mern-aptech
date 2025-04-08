const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("record", recordSchema);
