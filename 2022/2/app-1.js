const fs = require("fs");

const game = {
  "A X": 3,
  "A Y": 6,
  "A Z": 0,
  "B X": 0,
  "B Y": 3,
  "B Z": 6,
  "C X": 6,
  "C Y": 0,
  "C Z": 3,
};

const result = {
  X: 1,
  Y: 2,
  Z: 3,
};

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const score = data
    .split("\n")
    .map((i) => i.replace("\r", ""))
    .reduce((acc, curr) => {
      acc += game[curr];
      acc += result[curr[2]];
      return acc;
    }, 0);
  console.log(score);
});
