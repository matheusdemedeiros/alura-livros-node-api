import express from "express";
import BooksController from "../controllers/livrosController.js";

const ROUTE_BASE = '/livros';
const router = express.Router();

router.get(ROUTE_BASE, BooksController.listBooks);

export default router;
