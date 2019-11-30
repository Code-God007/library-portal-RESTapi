const mongoose = require("mongoose");

// Defining Schema for Books
const booksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Books", booksSchema);
