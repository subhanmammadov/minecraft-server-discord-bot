const chalk = require('chalk');//techno
const moment = require('moment');//techno
const Discord = require('discord.js');//techno
const ayarlar = require('../techno.json');//techno
//techno
var prefix = ayarlar.prefix;//techno
//techno
//techno
module.exports = client => {//techno
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);//techno
  client.user.setStatus("idle");//techno
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!           techno`);
};//techno
//techno bot
