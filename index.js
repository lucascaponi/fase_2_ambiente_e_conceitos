const express = require("express");

const server = express();

const users = ["Diego", "Cláudio", "Victor", "Luana"];

server.get("/users", (req, res) => {
  res.json({
    users
  });
});

server.get("/users/:index", (req, res) => {
  const index = req.params.index;

  res.json({
    user: `${users[index]}!`
  });
});

server.listen(3000);
