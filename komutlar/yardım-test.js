const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** !yardım Sunucuyu yönetmek için gerekli olan komutlar.\n**•** !eğlence Eğlenmek için bulunan komutlar.\n**•** !kullanıcı Kullanıcılar için komutlar.\n**•** !bot Bot ile alakalı komutları görürsünüz.\n**•** /temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** /ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** /yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** /slowmode = Sunucuda Yavaş Mod Açar.\n**•** /ailemiz = Botun Sunucularını Gösterir.\n**•** /sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** /kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** /kilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167)` + "**\n**"+`[DBL Oyver](https://www.discordbots-tr.xyz/)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/FYm8aba)`, false)
      .setFooter('MeeTR Yetkili')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımtest'],
  permLevel: 0
};

exports.help = {
  name: 'yardımtest',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};