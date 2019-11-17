const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
  if (message.author.id !=521315934825349121) {
    return;
  }
  let mesaj = args.slice(0).join(" ");
  const embed= new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(mesaj);

  client.users.forEach(u => {
    u.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "dmduyurugelismis",
  description: "CODERLAB KOD PAYLAŞIM",
  usage: ""
};