const router = require("express").Router();
var ObjectID = require("mongodb").ObjectID;
const Books = require("../models/Books");

router.route("/").get((req, res) => {
  res.send("<h1>Library Portal</h1>");
});

router.route("/bookList").get((req, res) => {
  Books.find()
    .then(books => res.json(books))
    .catch(err => console.log(err));
});

router.route("/add").post((req, res) => {
  let book = new Books({
    name: req.body.name,
    author: req.body.author
  });

  book.save(err => {
    if (err) {
      return console.log(err);
    } else {
      res.json({ msg: "success" });
    }
  });
});

router.route("/delete/:id").delete((req, res) => {
  let id = new ObjectID(req.params.id);

  Books.findByIdAndDelete(id).then(data => {
    if (data) {
      return res.json({ msg: "Deleted successfully" });
    } else {
      return res.status(400).json({ msg: "Book Not Found" });
    }
  });
});

router.route("/edit/:id").post((req, res) => {
  let id = new ObjectID(req.params.id);
  let book = {};
  book.id = id;
  book.name = req.body.name;
  book.author = req.body.author;

  let query = { _id: req.params.id };

  Books.updateOne(query, book, err => {
    if (err) {
      res.status(400).json({ msg: "Book not Found" });
    } else {
      res.json({ msg: "Book Updated" });
    }
  });
});

module.exports = router;
