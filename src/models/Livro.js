import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  editora: { type: String, required: true },
  pageCount: { type: Number },
});

const books = mongoose.model('livros', bookSchema);

export default books
