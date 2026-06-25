import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/game', async (req, res) => {
  res.json({});

})

app.post("/games", (req, res) => {
 // const { roomCode } = req.body;

  res.json({
    roomCode: "PLUM43",
    letter: "B",
    topic: "Animals"
  });
});

app.post("/answers", (req, res) => {
  res.json({
    accepted: true
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 