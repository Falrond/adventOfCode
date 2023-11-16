const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  console.log(data);

  let obj = {};

  for (let i = 0; i < data.length; i++) {
    obj[data[i]] = (obj[data[i]] || 0) + 1;
    if (obj[data[i]] > 1) {
      obj = {};
    }

    let length = Object.keys(obj).length;
    console.log(obj);
    if (length === 14) {
      console.log(i);
      return;
    }
  }
});
