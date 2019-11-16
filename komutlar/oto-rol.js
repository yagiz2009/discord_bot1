const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let rol = message.mentions.roles.first();
  if (!rol) return message.reply('Bot Otorol için bir rol etiketlemelisiniz!')
  
  db.set(`botR_${message.guild.id}`, rol.id)
  
  const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`Bot Otorol Rol'ü başarıyla ${rol} olarak ayarlandı!`)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(emb)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-otorol-ayarla','bototorol-ayarla'],
  permLevel: 2,
  kategori: "ayar"
}
exports.help = {
  name: 'bot-otorol',
  description: 'Sunucuya özel bot otorol ayarlar.',
  usage: '!!bot-otorol'
}