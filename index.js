const express = require("express");

const server = express();

server.get("/", (req, res) => {
  const nome = req.query.nome;

  res.json({
    message: `Hello ${nome}!`
  });
});

server.listen(3000);
