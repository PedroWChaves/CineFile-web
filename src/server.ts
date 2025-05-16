import express from "express";
import elementoRoutes from "./routes/elemento.route";
import obraRoutes from "./routes/obra.route";
import pessoaRoutes from "./routes/pessoa.route";

const app = express();

app.use(express.json());
app.use("/elementos", elementoRoutes);
app.use("/obras", obraRoutes);
app.use("/pessoas", pessoaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
