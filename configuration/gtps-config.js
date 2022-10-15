const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  // Server Information 
  servername: "NewTopiaPS",
  serverowner: "Hans",
  serverwebsite: "https://demo",
  linkhost: "https:/mediafire.com/file/770jlwcrij4at0f",
  // Gapunya website? beli di https://gtps.app/pricing aja, cuma 2 dlan
  
  // Path => navigate to the folder like the example
  exename: "StoreItsKyy.exe",
  exe: "C:\Downloads\imzulan remake ccp\x64\Release\StoreItsKyy.exe",
  https: "C:\Downloads\imzulan remake ccp\x64\Release\3.95 HTTPS\main.js",
  onlinecount: "C:\Downloads\imzulan remake ccp\x64\Release\online.txt",
  player: "C:\imzulan remake ccp\x64\Release\database\players",
  world: "C:\Downloads\imzulan remake ccp\x64\Release\database\worlds",
  guild: "C:\Downloads\imzulan remake ccp\x64\Release\database\guilds",

  // In Game Information
  wotd: "START",
  dailyquestblockname1: "Mystery Block",
  dailyquestquantity1: "100",
  dailyquestblockname2: "Wood Block",
  dailyquestquantity2: "200",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
