const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» iBot Komutları')
.setTimestamp()
.addField('» Moderasyon Komutları', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç !yaz !ban !banlist !mesajat !duyuru !kanal-açıklama !çekiliş !isim !fakemesaj !uyarı !sabitle !partner')
.setDescription("[Web Sitesi](https://ibots.glitch.me)")
.setFooter(' iBot | Yardım Listesi', client.user.avatarURL)
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};