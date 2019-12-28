const express = require("express");

const server = express();

const users = ["Diego", "Cláudio", "Victor"];

server.get("/users", (req, res) => {
  res.json({
    message: `${users}`
  });
});

server.get("/users/:index", (req, res) => {
  const index = req.params.index;

  res.json({
    message: `User ${users[index]}!`
  });
});

server.listen(3000);
