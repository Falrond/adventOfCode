const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  console.log(data);

  for (let i = 0; i <= data.length - 14; i++) {
    const start = data.slice(i, i + 14).split("");
    // console.log(start);

    const duplicateItems = start.filter(
      (letter, index) => start.indexOf(letter) != index
    );
    if (duplicateItems.length === 0) {
      console.log(i + 14);
      return;
    }
  }
});
