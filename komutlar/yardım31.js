const Discord = require('discord.js');

exports.run = async (client, message, args,params) => {
var filtre = m => m.author.id === message.author.id
	if (!args[0]) {

message.channel.send(`\`\`\`js
YARDIM KOMUTLARI:
[1] eğlence \`Eğlence komutlarını gösterir.\`
[2] kullanıcı \`Kullanıcı komutlarını gösterir.\`
[3] yetkili \`Yetkili komutlarını gösterir.\`
[4] ekstra \`Ekstra komutları gösterir.\`
# örn: !!eğlence ve ya 1
# komutlar hakkında da yardım alabilirsiniz: !!yardım komutismi
\`\`\``)
                         message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => {
                         
                                if(collected.first().content === "1" || collected.first().content === "!!eğlence") {
                                    message.channel.send(`\`\`\`js
EĞLENCE KOMUTLARI:
!!öp \`Belirtilen kullanıcıyı öper.\`
!!efektmesaj \`Belirtilen yazıyı küçültür.\`
!!tr \`Profil resimlerine "TÜRK BAYRAĞI" efekti ekler.\`
!!wasted \`Profil resimlerine "WASTED" efekti ekler.\`
!!trigger \`Profil resimlerine "TRİGGERED" efekti ekler.\`
!!kedi \`Rastgele kedi fotoğraflarını gönderir.\`
!!rastgelegif \`Rastgel gif gönderir.\`
!!sor \`Yapay zekaya soru sormanızı sağlar. @STARK's ile de sorabilirsiniz.\`
\`\`\``)                                } else if(collected.first().content === "2" || collected.first().content === "!!kullanıcı") {
                                  message.channel.send(`\`\`\`js
KULLANICI KOMUTLARI:
!!okulsayaç \`Okulların Açılmasına Kalan Gün, Tarih Vb Gösterir.\`
!!yılbaşı \`Yılbaşının Kutlanmasına Kalan Gün, Tarih Vb Gösterir.\`
!!profil \`Belirtilen kullancının ayrıntılı bilgisini gösterir.\`
!!botbilgi \`Geçerli bot bilgilerini gösterir.\`
!!kurucu \`Bulunduğu sunucunun kurucusunu gösterir.\`
\`\`\``) 
                                } else if(collected.first().content === "3" || collected.first().content === "!!yetkili") {
                                    message.channel.send(`\`\`\`js
YETKİLİ KOMUTLARI:
!!güvenlik \`Sunucuya Gelen Kişileri Denetler, "Belirtilen kanalı güvenlik odası yapar".\`
!!sil \`Belirtilen miktarda mesaj siler.\`
!!duyuru \`Duyuru kanalı ayarlanmışsa o kanala duyuru gönderir.\`
!!link-engel \`Belirli linkleri engeller, "Kullanıcıları Yasakla" yetkisi olanların reklamını engellemez.\`
!!küfür-engel \`Birçok küfürü engeller ve sohbetten siler.Reklam koruması ile aynı şekilde çalışır.\`
!!modlog sıfırla/kapat \`"vkanal","kayıtkanalı" ayarını sıfırlamanıza yarar.\`
\`\`\``)
                                } else if(collected.first().content === "4"||collected.first().content === "!!ekstra") {
                                    message.channel.send(`\`\`\`js
EKSTRA KOMUTLAR:
!!bot \`Etiketlenen bot hakkında bilgiler gösterir.\`
!!güncellemeler \`Bota gelen güncelleme listesini gösterir.\`
!!hastebin \`Hastebin sitesine kodunuzu/yazınızı yükler.\`
\`\`\``)
                                } else if(collected.first().content === "5") {
                                      if(message.author.id !== "470974660264067072") return  message.reply('<:dikkat:620691181524746283> Burayı `sadece` yapımcılarım görebilir.')   
                                  message.channel.send(`\`\`\`js
YAPIMCI KOMUTLARI:
!!eval \`Kod denemek için kullanılır.\`
!!reboot \`Botu yeniden başlatır.\`
!!dnd \`Botun durumunu rahatsız etmeyine alır.\`
!!dblsayı \`Botun Discord Bot List toplam oy sayısını atar.\`
\`\`\``)
                                } else return 
                         })
  }
  
  	let command = args[0]
		if (client.commands.has(command)) {
		command = client.commands.get(command)
        var avatar = 'https://cdn.discordapp.com/avatars/618360355269246977/decadf5ed62b302974c9490a1ec50014.png?size=2048'
		const embed = new Discord.RichEmbed()
      .setAuthor(`${command.help.isim} Komutu: `,avatar)
			.addField('Kullanım:', `!!${command.help.usage}`, false)
			.addField('Açıklama:', command.help.description, false)
			.addField('Kategori:', `${command.help.kategori}`,true)  
			.addField('Alternatifler:', command.conf.aliases[0] ? command.conf.aliases.join(', ') : 'Bulunmuyor',true)
			.setColor("RED")
		message.channel.send({embed})
	}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help','komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım31',
  isim: 'Yardım',
  kategori: 'Kategorisi Yok',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
}; 