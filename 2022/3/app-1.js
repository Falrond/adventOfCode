const fs = require("fs");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
fs.readFile("./data.txt", "utf-8", (err, data) => {
  const result = data
    .split("\n")
    .map((string) => string.replace("\r", ""))
    .reduce((acc, str) => {
      const partOne = str.slice(0, str.length / 2);
      const partTwo = str.slice(str.length / 2, str.length);

      for (let i = 0; i < partOne.length; i++) {
        const letter = partOne[i];

        if (partTwo.indexOf(letter) > -1) {
          acc += letters.indexOf(letter) + 1;
          break;
        }
      }
      return acc;
    }, 0);
  console.log(result);
});
