 Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let botid = ('601460231905476619') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
     //BU KOMUT MUHTEMELEN ÇALINTI VE MUHTEMELEN ClOsLy e Aittir.
        .setTitle(` şşş geliyor `)
        .setDescription(` **${message.author.username}** **korkunç birşeyler mi görmek istiyorsun pekala aşağıdaki linklerden birine git ve hayatını şokunu yaşa ve eğer korkunç videolara gitmek istersen onlarda oralarda bir yerlerde iyi korkmalar ahahhahahahhaahahaha!!!**`)
        .addField(`  » BÖ VİDEO`,`[1.link](https://images-ext-2.discordapp.net/external/ySnwbFJgVA6r4NLlu7GW2b8N7NfRaEUdBKNqkJVkt2E/https/78.media.tumblr.com/452063fcc1533a028f27cba85291d644/tumblr_ms8w5wWoOT1spwp48o1_500.gif?width=400&height=216) **|** [2.link](https://www.youtube.com/watch?v=yJpJCZYTL74)`)
        .addField(`  » BÖ FOTO`, `[1.link](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGDBZ7liJi2ihtNeWjci1G7cF4AnIWhj1ci-gVOCJSlsDKIuVS) **|** [2.link](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTVVSri0NBfwOs9Zfp5nKeANPiBjJVDdm5UFppNql9RvijL0bt)  `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'şşş',
  description: 'şşşşş',
  usage: 'şşş'
};
