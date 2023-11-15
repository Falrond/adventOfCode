const fs = require("fs");

// const stacks = {
//   1: ["Z", "N"],
//   2: ["M", "C", "D"],
//   3: ["P"],
// };

const stacks = {
  1: ["S", "Z", "P", "D", "L", "B", "F", "C"],
  2: ["N", "V", "G", "P", "H", "W", "B"],
  3: ["F", "W", "B", "J", "G"],
  4: ["G", "J", "N", "F", "L", "W", "C", "S"],
  5: ["W", "J", "L", "T", "P", "M", "S", "H"],
  6: ["B", "C", "W", "G", "F", "S"],
  7: ["H", "T", "P", "M", "Q", "B", "W"],
  8: ["F", "S", "W", "T"],
  9: ["N", "C", "R"],
};

fs.readFile("./data.txt", "utf-8", (err, data) => {
  const result = data
    .split("\n")
    .map((i) => i.replace("\r", ""))
    .map((i) => {
      //   return [+i[5], +i[12], +i[17]];
      const arr = i.split(" ");
      return [+arr[1], +arr[3], +arr[5]];
    });

  console.log(result);

  result.forEach((instr) => {
    for (let i = 0; i < instr[0]; i++) {
      stacks[instr[2]].push(stacks[instr[1]].pop());
    }
  });

  let str = "";

  for (const prop in stacks) {
    let letter = stacks[prop].slice(-1);
    str += letter;
  }

  console.log(str);
});
