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



       message.guild.owner.send("Gerekli Herşey Kuruldu Rahatına Bak!")
     
            })   
    
}
});