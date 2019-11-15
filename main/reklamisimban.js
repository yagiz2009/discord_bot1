
Save New Duplicate & Edit Just Text
client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı.`, 
        }) 
    } 
  } 

});

//CODARE