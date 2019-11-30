const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription("[Tıkla oyna!](https://mini-breakout.glitch.me/)")
  .setColor(0x00ffff)
  

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['blokkır'],
  permLevel: 0
};

exports.help = {
  name: 'yardımv91',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'blok-kırmaca'
};