import books from "../models/Livro.js";

class BooksController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static saveBook = (req, res) => {
    const book = new books(req.body);
    if (book) {
      book.save((err) => {
        if (err) {
          res
            .status(500)
            .send({ message: `${err.message} - Falha ao cadastrar o livro` });
        } else {
          res.status(201).send(book.toJson());
        }
      });
    }
  };

  static updateBook = (req, res) => {
    let index = req.params.id;
    books.findByIdAndUpdate(index, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao atualizar livro` });
      }
    });
  };

  static deleteBook = (req, res) => {
    let index = req.params.id;
    books.findByIdAndRemove(index, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro deletado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao deletar livro` });
      }
    });
  };

  static retrieveBook = (req, res) => {
    let index = req.params.id;

    books.findById(index, (err, books) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - ID do livro não localizado` });
      } else {
        res.status(200).send(books);
      }
    });
  };
}

function getBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default BooksController;
