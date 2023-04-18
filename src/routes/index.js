import express from "express";
import books from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Curso de node" });
  });

  app.use(express.json(), books);
};

export default routes;