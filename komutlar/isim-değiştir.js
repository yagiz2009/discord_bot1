const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../loglar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
 if (!message.member.roles.has("616688709986680876")) return message.reply('Bu komutu kullanabilmek için -------- rolüne sahip olmalısın.');
  let isim = args.slice(1).join(' ');
  let tag = ""
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`⚠ Lütfen bir kullanıcı giriniz!`)
  if(!isim) return message.reply(`⚠ Lütfen bir kullanıcı adı giriniz!`)
  if(isim.length > 32) return message.reply(`⚠ Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(`${tag} ${isim}`)
  message.react("🎅")
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegiştir'],
    permLevel: 0
}

exports.help = {
    name: 'isim',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isim @kullanıcı <kullanıcı adı>'
}