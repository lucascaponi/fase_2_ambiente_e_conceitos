const express = require("express");

const server = express();

server.use(express.json());

const users = ["Diego", "Cláudio", "Victor", "Luana"];

server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();
  console.timeEnd("Request");
});

function checkIfNameExistOnRequest(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required!" });
  }

  next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({ error: "User does not exist" });
  }

  next();
}

server.get("/users", (req, res) => {
  res.json({
    users
  });
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  const index = req.params.index;

  res.json({
    user: `${users[index]}!`
  });
});

server.post("/users", checkIfNameExistOnRequest, (req, res) => {
  const { name } = req.body;

  users.push(name);

  res.json(users);
});

server.put(
  "/users/:index",
  checkUserInArray,
  checkIfNameExistOnRequest,
  (req, res) => {
    const { name } = req.body;
    const index = req.params.index;

    users[index] = name;

    res.json(users);
  }
);

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  res.json(users);
});

server.listen(3000);
