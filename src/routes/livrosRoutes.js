import express from "express";
import BooksController from "../controllers/livrosController.js";

const ROUTE_BASE = '/livros';
const router = express.Router();

router
  .get(ROUTE_BASE, BooksController.listBooks)
  .get(`${ROUTE_BASE}/:id`, BooksController.retrieveBook)
  .post(ROUTE_BASE, BooksController.saveBook)
  .put(`${ROUTE_BASE}/:id`, BooksController.updateBook)
  .delete(`${ROUTE_BASE}/:id`, BooksController.deleteBook);

export default router;
