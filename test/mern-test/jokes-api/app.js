const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

require("./JokeSchema");

const jokeModel = mongoose.model("joke");

async function main() {
  // const mongo = "mongodb://localhost:27017/mern_reversation_app";
  await mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("Connected to mongo yeahh");
    })
    .catch((err) => {
      console.log("Err connecting", err);
    });
}

app.use(express.json());
app.use(cors());
main();

app.get("/get-jokes", async (req, res) => {
  const jokes = await jokeModel.find({});
  res.json({ jokes });
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.post("/post-joke", async (req, res) => {
  try {
    const newJoke = await jokeModel.create({
      joke: req.body.joke,
    });
    res.json({ newJoke: newJoke });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
