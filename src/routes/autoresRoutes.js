import express from "express";
import AuthorsController from "../controllers/autoresController.js";

const ROUTE_BASE = '/autores';
const router = express.Router();

router
  .get(ROUTE_BASE, AuthorsController.listAuthors)
  .get(`${ROUTE_BASE}/:id`, AuthorsController.retrieveAuthor)
  .post(ROUTE_BASE, AuthorsController.saveAuthor)
  .put(`${ROUTE_BASE}/:id`, AuthorsController.updateAuthor)
  .delete(`${ROUTE_BASE}/:id`, AuthorsController.deleteAuthor);

export default router;
