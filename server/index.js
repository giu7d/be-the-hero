import express from "express";

const PORT = 3333;

const app = express();

app.get("/", (request, response) => {
  return response.send({
    evento: "Semana Omnistack 11",
    aluno: "Giuseppe Davanzo"
  });
});

app.listen(PORT, () => console.log(`Listening @ PORT:${PORT}`));
