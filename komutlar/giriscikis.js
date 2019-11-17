
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
  let firox = message.mentions.channels.first();

  if (!firox) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `y!gkanal-sıfırla #kanal`')
    db.delete(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
 
  message.channel.send(`Hoşgeldin kanalı Başarıyla Sıfırlandı!.`)    
        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'gkanal-sıfırla',
 description: 'neblm',
 usage: 'gkanal-sıfırla #kanal'
};