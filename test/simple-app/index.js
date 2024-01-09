const express = require("express");
const app = express();
const { createObjects } = require("./data");

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to kubernetes</h1>
  `);
});

app.get("/get", async (req, res) => {
  res.json({ success: true, data: createObjects(5) });
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
