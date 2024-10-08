import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user_router.js";
import movieRoutes from "./routes/movie_router.js";
import rentedRoutes from "./routes/rented_router.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/rented", rentedRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
