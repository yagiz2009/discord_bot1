const Discord = require("discord.js"),
  db = require("quick.db")


exports.run = async (bot, message, args) => {
  let lülü = await db.fetch(`para_${message.member.id}`)
  let para;
  if(!lülü){
    para = "0"
  }else{
    para = await db.fetch(`para_${message.member.id}`)
  }
  message.channel.send(`Puanın; `+para)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "puan",
  description: "puan",
  usage: "puan"
};
