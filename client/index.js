const path = require("path");
const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/build") });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
