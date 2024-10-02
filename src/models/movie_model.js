
import db from "../config/db.js";


const movieSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  director:{
type: String,
required: true,
  },
classification:{
    type: String, 
    enum: ["Livre", "Maior16", "Maior18"],
    required: true,
},
});

const movie = db.model("movie", movieSchema);

export default movie;
