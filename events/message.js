const ayarlar = require('../techno.json');//techno
let talkedRecently = new Set();//techno
module.exports = message => {//techno
  if (talkedRecently.has(message.author.id)) {//techno
    return;//techno
  }//techno
  talkedRecently.add(message.author.id);//techno
    setTimeout(() => {//techno
    talkedRecently.delete(message.author.id);//techno
  }, 2500);//techno
  let client = message.client;//techno
  if (message.author.bot) return;//techno
  if (!message.content.startsWith(ayarlar.prefix)) return;//techno
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);//techno
  let params = message.content.split(' ').slice(1);//techno
  let perms = client.elevation(message);//techno
  let cmd;//techno
  if (client.commands.has(command)) {//techno
    cmd = client.commands.get(command);//techno
  } else if (client.aliases.has(command)) {//techno
    cmd = client.commands.get(client.aliases.get(command));//techno
  }//techno
  if (cmd) {//techno
    if (perms < cmd.conf.permLevel) return;//techno
    cmd.run(client, message, params, perms);//techno
  }//techno
//techno
};//techno
