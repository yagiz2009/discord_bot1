const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (message.author.id != 521315934825349121) {
    return message.channel.send("Bu komut sahibime özdür.");
  }

  let şahıs = message.mentions.users.first()

  if (!şahıs) return message.channel.send("Gold verilecek şahsı etiketle.");

  message.channel.send(`\`${şahıs.tag}\` Artık gold!`);
  db.set(`gold_${şahıs.id}`, "acik");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "goldyap",
  description: "Napcan?",
  usage: "goldyap"
};
