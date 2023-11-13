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

const result2 = {
  X: 0,
  Y: 3,
  Z: 6,
};

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const score = data
    .split("\n")
    .map((i) => i.replace("\r", ""))
    .reduce((acc, curr) => {
      for (let key in game) {
        if (key.startsWith(curr[0]) && game[key] === result2[curr[2]]) {
          acc += game[key] + result[key[2]];
        }
      }
      return acc;
    }, 0);
  console.log(score);
});
