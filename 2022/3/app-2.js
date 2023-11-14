const fs = require("fs");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
fs.readFile("./data.txt", "utf-8", (err, data) => {
  const formatData = data.split("\n").map((item) => item.replace("\r", ""));
  let groups = [];
  for (let i = 0; i < formatData.length; i += 3) {
    groups.push(formatData.slice(i, i + 3));
  }

  const commonLetters = groups.reduce((acc, group) => {
    // console.log(group);

    for (let i = 0; i < group[0].length; i++) {
      const letter = group[0][i];
      if (group[1].includes(letter) && group[2].includes(letter)) {
        acc += letters.indexOf(letter) + 1;
        break;
      }
    }
    return acc;
  }, 0);
  console.log(commonLetters);
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
  // console.log(result);
});
