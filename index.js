const express = require("express");

const server = express();

server.get("/teste/", (req, res) => {
  res.json({
    message: `Hello tsu!`
  });
});

server.get("/teste/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: `Hello ${id}!`
  });
});

server.listen(3000);
