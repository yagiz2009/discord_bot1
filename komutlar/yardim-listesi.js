const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» ⚔️ Moderasyon Komutları :hammer:', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç !yaz !ban !banlist')
.addField('» ⚙️Eğlence Komutları :beginner:', '!espri !rip - !kralol !1vs1 !kaç-cm !kralol !rip !wasted !yazı-tura !doğrulukcesaret !alkış !dcdekiyıkık !')
.addField('» ⚙️Genel Komutlar ⚡️', '!ailemiz !spoiler ')
.addField('» ⚙️Ekstra Komutlar 💥', '!çeviri !havadurumu !mc-ödül !rastgeleşifre !ateşle')
.addField('» ⚙️Bot Komutları ❄️', '!bizkimiz !davetoluştur !emojiyükle !ping !desteksunucu')
.addField('» ⚙️Kullanıcı Komutları 🔥', '!sikayet !kullanıcı-bilgi @user !avatar')
.addField('» ⚙️Sunucu Komutları ⭐️', '!istatistik !icon !alıntıla !hastebin !reklam-taraması !sunucunutanıt')
.addField('» ⚙️Nsfw Komutları 🔞', '!nsfw')
.addField('» ⚙️Diğer Komutlar 💣', '!beşiktaş !fenerbahçe !galatasaray !spotify !youtube')
.setFooter('🔰 Tosun Bot | Yardım Listesi', client.user.avatarURL)
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