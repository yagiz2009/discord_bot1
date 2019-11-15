const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Moderasyon Komutları', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç')
.addField('» Eğlence Komutları', '!rip - !kralol !1vs1 !kaç-cm !kralol !rip')
.addField('» Genel Komutlar', 'f?genel')
.addField('» Ekstra Komutlar', 'f?ekstra')
.addField('» Kullanıcı Komutları', '!sikayet')
.addField('» Nsfw Komutları', 'f?nsfw')
.setFooter('© 2018 Fredux', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım-listesi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};