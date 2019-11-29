const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (`await db.fetch(prefix${message.guild.id})) || "!";
 

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "Hatalı kullanım! örnek: ${prefix}rol-koruma aç && kapat"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(kanalk_${message.guild.id});
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("kanalKoruma sistemi!")
        .setDescription("Görünüşe göre rol koruma zaten aktif!");

      message.channel.send(embed);
      return;
    } else {
      db.set(kanalk_${message.guild.id}, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("kanal Koruma sistemi!")
        .setDescription("kanal koruma başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(kanalk_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("kanal Koruma sistemi!")
      .setDescription("kanal Koruma başarıyla kapandı!");

    message.channel.send(embed);
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-koruma2",
  description: "Rol koruma",
  usage: "rol-koruma"
};