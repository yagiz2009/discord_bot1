const db = require(`quick.db`)

exports.run = async(bot, message, args) => {
let kisi = message.mentions.users.first()
if(!kisi){
message.reply(`Lütfen birini taglayınız.`)
return
}
db.delete(`gold_${kisi.id}`)
message.channel.send(`Başarıyla ${kisi} adlı şahıs gold üyeden oldu!`)
return
}
exports.conf = {
enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5,
  kategori: "puan"
}
exports.help = {
name: "gold-çıkar",
  description: "sa",
  usage: "as"
}