import express from "express";
import "dotenv/config.js";
import "dotenv/config";
import user_router from "./routes/user_router.js";
import movie_router from "./routes/movie_router.js";
import rented_router from "./routes/rented_router.js";

const app = express();
const port = process.env.API_PORT
app.use(express.json());

app.use("/user", user_router);
app.use("/movie", movie_router);
app.use("/rented", rented_router)

app.listen(port, () => console.log("Servidor executando na porta " + port ));
