import express from "express";
import routes from "./routes";
import cors from "cors";

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3333;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Running on: ${ENV}`);
  console.log(`Listening @ PORT:${PORT}`);
});
