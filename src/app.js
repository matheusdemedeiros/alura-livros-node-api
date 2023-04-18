import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Livro.js";
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!');
})

const app = express();
app.use(express.json());

routes(app);

app.get('/livros/:id', (req, res) => {
  let index = getBook(req.params.id);
  res.status(200).json(books[index]);
})

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
  let index = getBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete('/livros/:id', (req, res) => {
  //atribuição via desestruturação
  let {id} = req.params;
  let index = getBook(id);
  books.splice(index, 1);
  res.send(`Livro ${id} apagado com sucesso!`);
})

function getBook(id) {
  return books.findIndex(book => book.id == id);
}

export default app