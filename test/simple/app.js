const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to kubernetes</h1>
    <a href="/health-check">Health Check</a>
  `);
});

app.get("/health-check", (req, res) => {
  res.send(`
    <h1 style="color: green">Welcome to kubernetes</h1>
    <hr />
    <a href="/">Kubernetes</a>
    <h3>What is Lorem Ipsum?</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  `);
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
