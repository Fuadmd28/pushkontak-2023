const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6287780241924"]; // isi pake no kalian
global.author = "FOXhost"; // isi pake nama kalian
global.packname = "FOXhost";
global.sessionName = "auth";
global.versionbot = "5.0.0";
global.delay = `25000`
global.mess = {
    wait: "Loading...",
    owner: "*Gausah sok asik*",
    waitdata: "Melihat Data Terkini...",
    admin: "Fitur Khusus Admin Group!",
    group: "Fitur Digunakan Hanya Untuk Group!",
    botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
