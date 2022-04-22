const fs = require("fs");

const cat = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === "cat") {
    process.stdout.write(fs.readFile(cmd[1]), "utf8", function (err, data) {
      console.log(data);
    });
  }
});

module.exports = { cat };
