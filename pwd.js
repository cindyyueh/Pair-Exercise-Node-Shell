process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
    process.stdout.write(" \nprompt > ");
  }
});

// module.exports = { pwd, x };
//  ^delete because not necessary to export anything into bash.
//testing git
