import autores from '../models/Autor.js'

class AuthorsController {
  static listAuthors = (req, res) => {
    autores
      .find((err, authors) => {
        res.status(200).json(authors);
      });
  };

  static saveAuthor = (req, res) => {
    const author = new autores(req.body);
    if (author) {
      author.save((err) => {
        if (err) {
          res
            .status(500)
            .send({ message: `${err.message} - Falha ao cadastrar o autor` });
        } else {
          res.status(201).send(author.toJSON());
        }
      });
    }
  };

  static updateAuthor = (req, res) => {
    let index = req.params.id;
    autores.findByIdAndUpdate(index, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao atualizar autor` });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    let index = req.params.id;
    autores.findByIdAndRemove(index, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor deletado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao deletar autor` });
      }
    });
  };

  static retrieveAuthor = (req, res) => {
    let index = req.params.id;
    autores.findById(index, (err, authors) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - ID do autor não localizado` });
      } else {
        res.status(200).send(authors);
      }
    });
  };
}

export default AuthorsController;

