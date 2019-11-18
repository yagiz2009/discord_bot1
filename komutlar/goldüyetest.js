const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

        
const Discord = require("discord.js");  
module.exports.run = async (bot, message, args) => {      
let replies = ["https://i.imgyukle.com/2019/09/06/oXCl7o.jpg", "https://i.imgyukle.com/2019/09/06/oXCMGH.jpg", "https://i.imgyukle.com/2019/09/06/oXCZbA.jpg", "https://i.imgyukle.com/2019/09/06/oXC4r1.jpg", "https://i.imgyukle.com/2019/09/06/oXC6hI.jpg"];     
 
  let result = Math.floor((Math.random() * replies.length));     
 
  let gifembed = new Discord.RichEmbed() 
.setTitle("Manzara fotoğrafınız:")         
.setColor("GREEN")        
.setFooter (`${message.author.tag} tarafından istendi.`, message.author.avatarURL)  
.setImage(replies[result]); 
  
  message.channel.send(gifembed); 
};  

    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'resim', 
  description: "",
  usage: ''
};
   