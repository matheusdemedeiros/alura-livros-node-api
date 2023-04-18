import express from "express";

const app = express();
app.use(express.json());

const books = [
  {id: 1, "title": "Senhor dos Aneis"},
  {id: 2, "title": "O Hobbit"}
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/livros', (req, res) => {
  res.status(200).json(books);
});

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