
import db from "../config/db.js";



const rentedSchema = new db.Schema({
    rente_by: {
    type: String,
    required: true,
  },
  movie_rented: {
    type: Number,
    required: true,
  },
  rent_date:{
    type: Number,
    required: true,
  },
  return_date:{
    type:Number,
    required: true,
  }
});

const rented = db.model("rented",rentedSchema);

export default rented;


