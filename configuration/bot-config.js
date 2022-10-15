const fs = require("fs");
const chalk = require("chalk");
const { doesNotThrow } = require("assert");

// Other
global.owner = ["6285774449597", "6283809215245"];
global.staff = ["6283809215245"];
global.footer = "Bot NewTopia";
global.sessionName = "NewTopia BoT";
global.prefa = ["", "/", "!", "."]; // "" = no prefix

global.thumb = fs.readFileSync("./assets/image/dignity.jpg");


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
