const fs = require("fs");
fs.readFile("./data.txt", "utf-8", (err, data) => {
  const formatData = data
    .split("\n")
    .map((i) => i.replace("\r", ""))
    .map((i) => i.split(","))
    .reduce((acc, curr) => {
      const curr1 = curr[0].split("-").map(Number);
      const curr2 = curr[1].split("-").map(Number);

      if (
        (curr1[0] >= curr2[0] && curr1[0] <= curr2[1]) ||
        (curr1[0] <= curr2[0] && curr1[1] >= curr2[0])
      ) {
        acc++;
        console.log(curr1, curr2);
      }
      //   if (
      //     (curr1[0] >= curr2[0] && curr1[1] <= curr2[1]) ||
      //     (curr1[0] <= curr2[0] && curr1[1] >= curr2[1])
      //   ) {
      //     acc++;
      //     console.log(curr1, curr2);
      //   }

      return acc;
    }, 0);
  console.log(formatData);
});
