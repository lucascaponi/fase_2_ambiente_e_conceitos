const express = require("express");

const server = express();

server.use(express.json());

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

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { name } = req.body;
  const index = req.params.index;

  users[index] = name;

  res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  res.json(users);
});

server.listen(3000);
