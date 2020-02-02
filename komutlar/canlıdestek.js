const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, params) => {
 if (!message.guild) {
  return }  
let sunucu = await db.fetch(`sunucukaraliste_${message.guild.id}`);
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);
  if( sunucu == "aktif"){
   const userblacklist = new Discord.RichEmbed()
    .setURL(`https://bitly.com/xirsdavet`)
    .setAuthor(message.guild.name, message.guild.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz Kara Listenizi Açtırabilirsiniz" + `Destek Sunucu: https://discord.gg/vjYhuju`)
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
   .setColor('260aff')
    .setImage("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .setThumbnail("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .addField("Sunucu ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan **sunucu** ID numarası: **${message.guild.id}**`, true)
    return message.channel.sendEmbed(userblacklist);
 }else{ 
  if( kullanıcı == "aktif"){
    const userblacklist = new Discord.RichEmbed()
    .setURL(`https://bitly.com/xirsdavet`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz Kara Listenizi Açtırabilirsiniz" + `Destek Sunucu: https://discord.gg/vjYhuju`)
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
  .setColor('260aff')
    .setImage("https://i.postimg.cc/ZqK0QnTT/intelligent-blacklisting-icon.png")
    .addField("Kullanıcı ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan **Kullanıcı** ID numarası : **${message.author.id}**`, true)
    return message.channel.sendEmbed(userblacklist);
}else{
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu Komutu Kullana Bilmek için \`Yönetici`\ Yetkisine Sahip Olman Gerek :no_entry:') 
 var channel = client.channels.find('id', '648433955988832277')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  const embed = new Discord.RichEmbed()
  .setTitle("» Lotech | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle**\n\n60 Saniye içinde geri dönülmezse lütfen Bu Sunucya Girerek [İLETİŞİME GEÇ](https://discord.gg/6xBMJy4) İletişime Geçin")
   .setColor('260aff')
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
   .setColor('260aff')
  .setDescription(asdf.url)
      channel.send(invite)

  
};

}

    }
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'dve!canlıdestek'
};