import express from "express";

const app = express();

app.use(express.json());

// Store games
const games = [];

// Letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Topics
const categories = [
  "Animals",
  "Foods",
  "Countries",
  "Cities",
  "Movies",
  "Sports",
  "Jobs",
  "Colors",
  "Fruits",
  "Vegetables"
];

// Random letter
function randomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

// Random topic
function randomCategory() {
  return categories[Math.floor(Math.random() * categories.length)];
}

// Home
app.get("/", (req, res) => {
  res.send("Hello World");
});

// GET all games
app.get("/games", (req, res) => {
  res.json(games);
});

// POST create game
app.post("/games", (req, res) => {

  const roomCode = req.body.roomCode;

  if (!roomCode) {
    return res.json({
      error: "Room code is required"
    });
  }

  const existingGame = games.find(
    (game) => game.roomCode === roomCode
  );

  if (existingGame) {
    return res.json({
      error: "Room code already exists"
    });
  }

  const game = {
    roomCode: roomCode,
    letter: randomLetter(),
    topic: randomCategory()
  };

  games.push(game);

  res.json(game);

});

// POST answer
app.post("/answers", (req, res) => {

  const roomCode = req.body.roomCode;
  const username = req.body.username;
  const answer = req.body.answer;

  // Find the game
  const game = games.find(
    (game) => game.roomCode === roomCode
  );

  if (!game) {
    return res.json({
      accepted: false,
      message: "Game not found"
    });
  }

  // Check first letter
  if (answer[0].toUpperCase() !== game.letter.toUpperCase()) {
    return res.json({
      accepted: false,
      message: `Answer must start with ${game.letter}`
    });
  }

  // Correct answer
  res.json({
    accepted: true,
    username: username,
    answer: answer
  });

});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});