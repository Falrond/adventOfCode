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

  let maxElfes = [];

  for (const list of input) {
    const sum = list.reduce((acc, calories) => {
      return acc + calories;
    }, 0);

    if (maxElfes.length < 3) {
      maxElfes.push(sum);
    } else {
      const min = Math.min(...maxElfes);
      if (sum > min) {
        maxElfes[maxElfes.indexOf(min)] = sum;
      }
    }
  }

  console.log(maxElfes.reduce((acc, curr) => acc + curr));
});
