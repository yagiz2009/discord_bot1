const Discord = require('discord.js'), 
      arraySort = require('array-sort'), 
      table = require('table'); 
      send = require('quick.hook'); // anan


exports.run = async (client, message, args, tools) => {
  

    
    let invites = await message.guild.fetchInvites().catch(error => { 
     
        return message.channel.send('Maalesef, davetiyeyi görüntülemek için uygun izne sahip değilim!!');
    }) 
    invites = invites.array();

  
    arraySort(invites, 'uses', { reverse: true });

  
    let possibleInvites = [['User', 'Uses']]; 
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })


    const embed = new Discord.MessageEmbed()
        .setColor(0xCB5A5E)        
    .addField('Liderler Sıralaması', `\`\`\`${table.table(possibleInvites)}\`\`\``); 
    message.channel.send(embed) 
        name: 'Sunucu Davetleri',
        .icon('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trophy-128.png');
    })
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [top],
  permLevel: 0
};

exports.help = {
  name: 'leaderboard',
};