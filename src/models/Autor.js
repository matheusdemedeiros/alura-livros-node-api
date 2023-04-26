import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  nationality: { type: String, required: true },
});

const autores = mongoose.model("autores", authorSchema);

export default autores;
