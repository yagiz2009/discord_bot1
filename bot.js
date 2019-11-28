const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const ms = require('parse-ms')
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!js') {  // !js Örnek
       msg.member.addRole("645241430591406082") //Javascript İdi 
    msg.reply('**Js** Rolünü Başarıyla Aldın.'); // Kendinize Göre Editliyin
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!kırmızı') {  // Renk İsmi
       msg.member.addRole("645265708707479552") //Rolün İdsi
    msg.reply('**Kırmızı** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!turuncu') {  // Renk İsmi
       msg.member.addRole("645265872839114772") //Rolün İdsi
    msg.reply('**Turuncu** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!sarı') {  // Renk İsmi
       msg.member.addRole("645266056595767358") //Rolün İdsi
    msg.reply('**Sarı** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!yeşil') {  // Renk İsmi
       msg.member.addRole("645266165245149184") //Rolün İdsi
    msg.reply('**Yeşil** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!mavi') {  // Renk İsmi
       msg.member.addRole("645266287802580993") //Rolün İdsi
    msg.reply('**Mavi** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!mor') {  // Renk İsmi
       msg.member.addRole("645266367473254412") //Rolün İdsi
    msg.reply('**Mor** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!pembe') {  // Renk İsmi
       msg.member.addRole("645266456933695488") //Rolün İdsi
    msg.reply('**Pembe** Rolünü Başarıyla Aldın. :inbox_tray:'); // Renge Göre İsmini Editle
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!html') {  // !js Örnek
       msg.member.addRole("645245068290031645") //Javascript İdi 
    msg.reply('**HTML** Rolünü Başarıyla Aldın.'); // Kendinize Göre Editliyin
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!python') {  // !js Örnek
       msg.member.addRole("645245019049033769") //Javascript İdi 
    msg.reply('**Python** Rolünü Başarıyla Aldın.'); // Kendinize Göre Editliyin
  } 
});

client.on("message", async message => {
    if (message.member.hasPermission('MANAGE_GUILD')) return;
    let links = message.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
    if (!links) return;
    if (message.deletable) message.delete();
    message.channel.send(`Hey ${message.author}, sunucuda link paylaşamazsın!`)
})

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('645670665784918017').send(new Discord.RichEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
})

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kurulum") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send("Sunucu Zaten Ayarlanmış")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **kabul** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kullanabilir");
      message.channel.awaitMessages(response => response.content === 'kabul', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
        
         message.guild.owner.send('Heyo, Sunucunuz Kuruluyor... Bu Biraz Zaman Alabilir!')
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
        
        
   message.guild.createChannel('✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])


        
 message.guild.createChannel('【📃 】кυяαℓℓαя', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
 message.guild.createChannel('「💚」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
       message.guild.createChannel('【👑】sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
             message.guild.createChannel('【🎉】çєкιℓιş', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
            message.guild.createChannel('【📢 】∂υуυяυℓαя', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
        
                    message.guild.createChannel('【🎀】ραятηєя', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
        

       }) 
       .then((collected) => {
        message.guild.createChannel('✮ ▬  ▬ Metin Kanalları▬  ▬ ✮', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`【🎁】şikayet-ve-öneriler`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【👥】video-duyurular`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【📷】galeri-odası`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【🤖】bot-komut`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【👻】sohbet-odası`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));

      message.guild.createChannel(`🌹》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Ses Kanalları▬  ▬ ✮|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|Ses Kanalları|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`👍》Sesli Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Ses Kanalları|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sesli Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Ses Kanalları|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})



       message.guild.owner.send("Gerekli Herşey Kuruldu Rahatına Bak! **Tosun Bot'un kıymetini bil :D**")
     
            })   
    
}
});

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`📤 ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`📥 ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`otoR_${member.guild.id}`);
  let kanal = await db.fetch(`otoK_${member.guild.id}`);
  let mesaj = await db.fetch(`otomesaj_${member.guild.id}`);
  let rol2 = await db.fetch(`botR_${member.guild.id}`);
  
  if (member.user.bot === true){
    
    if (!rol2) return
    
    member.addRole(member.guild.roles.get(rol2));
  } else {
  
  if (!rol) return
  member.addRole(member.guild.roles.get(rol))
  
  if (!kanal) return
  member.guild.channels.get(kanal).send(`${member} Kullanıcısına \`${member.guild.roles.get(rol).name}\` rolü verildi! **${member.guild.members.size}** Kişiyiz!`)
  }
})

client.on("guildCreate", guild => { // Birisi botu sunucuya attıgında bot özel mesaj atar.
const tesekkurler = new Discord.RichEmbed()
.setTitle(`Tosun Bot | Bilgilendirme`)
.setTimestamp()
.setColor("GREEN")
.setDescription(`Beni Sunucuna Eklediğin İçin Teşekkür Ederim \n Sana En İyi Şekilde Hizmet Edeceğim.\n Eğer Bir Sorunla Karşılaşırsan Destek Sunucuma Gel https://discord.gg/kQJQJgr \n Komutlarımız için **!yardım** komutunu kullanınız.`)
guild.owner.send(tesekkurler)


});

client.on('guildMemberAdd',async member => { // Güvenlik Sistemi
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   if (!kanal) return
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'güvenlik.png');
    kanal.send(attachment)
});

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  
  
 
  member.guild.fetchInvites().then(guildInvites => {
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
    
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(member.user.avatarURL)
   .setDescription(`\`\`${member.user.tag}\`\` **adlı kullanıcı sunucuya katıldı , davet eden kullanıcı:** \`\`${davetçi.tag}\`\` (\`\`${invite.uses}\`\` **adet daveti var**)`)
   member.guild.channels.get('646137115402567683').send(embed)
  })
});
   
client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});
