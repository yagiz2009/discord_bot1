const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let istek = args[0];

  let user = message.mentions.users.first() || message.member;
  let gold = await db.fetch(`gold_${message.member.id}`);
  let para = await db.fetch(`para_${message.author.id}`);

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  try {
    if (!istek) {
      const e = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(`\n\n Ücret ile **Gold** ve **Puan** satın almak için \`zMorcy#4249\` `
        );
      message.channel.send(e);
      return;
    }

    if (istek === "gold") {
      } else if (many > 3000) {
        message.channel.send(`Artık goldsun!`);
        db.set(`many{message.member.id}`, -3000);
        db.set(`gold_${message.member.id}`, "acik");
        return
      } else if ((para = 3000)) {
        message.channel.send(`Artık goldsun!`);
        db.set(`many{message.author.id}`, -3000);
        db.set(`gold_${message.member.id}`, "acik");
        return
      }
      return;
    }
    return
  } catch (err) {
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "market",
  description: "Eşya",
  usage: "market"
};
