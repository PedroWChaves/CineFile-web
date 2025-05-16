import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import authRoutes from "./routes/auth.route";
import elementoRoutes from "./routes/elemento.route";
import obraRoutes from "./routes/obra.route";
import pessoaRoutes from "./routes/pessoa.route";

import { authMiddleware } from "./middlewares/auth.middleware";

const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CineFile API",
      version: "1.0.0",
      description: "API para gerenciar dados de obras cinematográficas",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/schemas/*.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/elementos", elementoRoutes);
app.use("/obras", authMiddleware, obraRoutes);
app.use("/pessoas", authMiddleware, pessoaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
