const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('⚔️ » Moderasyon Komutları :hammer:', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç !yaz !ban !banlist !mesajat !duyuru !kanal-açıklama !çekiliş !isim !fakemesaj')
.addField(':hammer: » Eğlence Komutları :beginner:', '!espri !rip - !kralol !1vs1 !kaç-cm !kralol !rip !wasted !yazı-tura !doğrulukcesaret !alkış !dcdekiyıkık !korkut !tutuklandın !şşş !tkm !sigarayak')
.addField(':hammer: » Genel Komutlar ⚡️', '!ailemiz !spoiler !stresçarkı !manzara')
.addField(':hammer: » Ekstra Komutlar 💥', '!çeviri !havadurumu !mc-ödül !rastgeleşifre !ateşle !ilginçbilgi')
.addField(':hammer: » Bot Komutları ❄️', '!bizkimiz !davetoluştur !emojiyükle !ping !desteksunucu')
.addField(':hammer: » Kullanıcı Komutları 🔥', '!sikayet !kullanıcı-bilgi @user !avatar')
.addField(':hammer: » Sunucu Komutları ⭐️', '!istatistik !icon !alıntıla !hastebin !reklam-taraması !sunucunutanıt !bug-bildir')
.addField(':hammer: » Diğer Komutlar 💣', '!beşiktaş !fenerbahçe !galatasaray !spotify !youtube')
.addField(':hammer: » CoderLab | Kod Paylaşma Yeri :inbox_tray:', '!desteksunucu')
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