const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» iBot Komutları')
.setTimestamp()
.addField('» Moderasyon Komutları', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç !yaz !ban !banlist !mesajat !duyuru !kanal-açıklama !çekiliş !isim !fakemesaj !uyarı !sabitle !partner')
.addField('» Moderasyon Komutları 2', '!sunucu-kurulum !sayaç-ayarla !sayaç-sıfırla !otorol !otorol-kanal !güvenlik !rol-koruma !kanal-koruma !kayıt !kayıt-rol !kayıt-log !kayıt-kanal !herkesten-rol-al @rol !herkese-rol-ver @rol !unbanall !hgbbkanalayarla')
.addField('» Eğlence Komutları', '!espri !rip - !kralol !1vs1 !kaç-cm !wasted !yazı-tura !doğrulukcesaret !alkış !dcdekiyıkık !tutuklandın !tkm !sigarayak !aşkölçer !mesajdöndür !balıktut')
.addField('» Genel Komutlar', '!spoiler !stresçarkı !manzara !atasözü !steam')
.addField('» Ekstra Komutlar', '!çeviri !havadurumu !mc-ödül !rastgeleşifre !ateşle !ilginçbilgi !burç !tekerleme')
.addField('» Bot Komutları', '!bizkimiz !davetoluştur !emojiyükle !ping !desteksunucu')
.addField('» Kullanıcı Komutları', '!sikayet !kullanıcı-bilgi @user !avatar')
.addField('» Sunucu Komutları', '!istatistik !alıntıla !hastebin !reklam-taraması !bug-bildir !canlıdestek !başvuru !tavsiye !reklam-engelleme !modlogayarla !davet-sıralaması fakegiriş fakeçıkış')
.addField('» Diğer Komutlar', '!beşiktaş !fenerbahçe !galatasaray !spotify !youtube')
.setDescription("[Web Sitesi](https://hanbot.glitch.me)")
.setFooter(' iBot | Yardım Listesi', client.user.avatarURL)
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