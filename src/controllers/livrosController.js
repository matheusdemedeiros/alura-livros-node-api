import books from "../models/Livro.js";

class BooksController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };
}

export default BooksController;
