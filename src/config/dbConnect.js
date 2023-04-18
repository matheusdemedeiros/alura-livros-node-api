import mongoose from "mongoose";

mongoose.connect("mongodb+srv://matheusdemedeiros200599:.654asdASD@firstcluster.weyfgrl.mongodb.net/alura-node");

let db = mongoose.connection;

export default db