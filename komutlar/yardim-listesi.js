const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('iBOT | Yardım Komutları')
.setTimestamp()
.addField('**!yetkili**','Sunucuyu yönetmek için gerekli olan komutlar!')
.addField('**!eğlence**','Eğlenmek için bulunan komutlar!')
.addField('**!kullanıcı**','Kullanıcılar için komutlar.')
.addField('**!bot**','Bot ile alakalı komutları görürsünüz.')
.setFooter('iBOT | Yardım Komutları')
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