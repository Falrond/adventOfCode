const fs = require("fs");

let path = []; //['/','/a','/e']

let tree = {}; //{'/' : ['a','b']}

const readBlock = (block) => {
  // console.log(block);
  const lines = block.split("\n");
  const command = lines[0];
  const rest = lines.slice(1);
  console.log(rest);

  if (command.startWith("cd ")) {
    // cd
    if (command.endWith("..")) {
      path.pop();
    } else {
      path.push(command.split("cd ")[1]);
    }
  } else {
    // ls

    let size = 0;
    for (const line of rest) {
      if (!line.startWith("dir")) {
        size += Number(line.split(" ")[0]);
      } else {
        const dir = line.split(" ")[1];
      }
    }
  }
};

const directorySize = (item) => {};

fs.readFile("data.txt", "utf-8", (err, data) => {
  data
    .split("$ ")
    .filter((x) => x)
    .map(readBlock);

  // const total = Object.keys(tree)
  //   .map(directorySize)
  //   .filter((x) => x <= 100000)
  //   .reduce((acc, v) => acc + v);

  // console.log(total);
});
