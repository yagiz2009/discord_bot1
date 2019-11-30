const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('YANLIŞ KULLANIYORSUN! **Örnek:** !küfür-engelleme aç veya kapat')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.channel.id}`, 'acik').then(i => {
      message.channel.send('✅ Küfur Engel bu kanalda başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanların küfürü engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.channel.id}`, 'kapali').then(i => {
      message.channel.send('✅ Küfür Engel bu kanalda başarıyla kapatıldı! Artık herkes küfür yazabilir.')
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 3
};

exports.help = {
  name: 'küfür-engelleme',
  description: '[Admin Komutu]',
  usage: 'küfür-engelleme'
};