const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const input = data
    .split("\n")
    .map(Number)
    .reduce(
      (acc, calories) => {
        if (calories === 0) {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(calories);
        }
        return acc;
      },
      [[]]
    );

  let maxElf = 0;

  for (const list of input) {
    const sum = list.reduce((acc, calories) => {
      return acc + calories;
    }, 0);

    if (sum > maxElf) {
      maxElf = sum;
    }
  }
  console.log(maxElf);
});
