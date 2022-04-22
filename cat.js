const fs = require("fs");

const cat = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === "cat") {

  fs.readFile(cmd[1], (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  });
  }
});

// module.exports = { cat };
