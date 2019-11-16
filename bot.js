const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
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
  if (msg.content.toLowerCase() === 'js') {  // !js Örnek
       msg.member.addRole("645241430591406082") //Javascript İdi 
    msg.reply('Js Rolünü Başarıyla Aldın.'); // Kendinize Göre Editliyin
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