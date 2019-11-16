const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let ayar = await db.fetch(`kufur_${message.guild.id}`)
  
  if (ayar === "acik"){
    message.channel.send(`${client.emojiler.hayirg} Küfür Engel bu sunucuda zaten açık!`)
  } else {
  const p = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  db.set(`kufur_${message.guild.id}`, "acik")
  
  message.channel.send(""+ client.emojiler.evetg +" Küfür engel başarıyla açıldı! \n`"+ p +"küfürkapat` yazarak kapatabilirsin!")
}
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "ayar"
};

exports.help = {
  name: 'küfüraç',
  description: 'Sunucunuzda Küfür Engel Açar.',
  usage: '!!küfüraç'
};