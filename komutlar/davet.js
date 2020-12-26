const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Linkler !")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=782885211826028575&scope=bot&permissions=2081422591) \n [__**Destek Sunucusu**__](https://discord.gg/7DUsnV2Hs7)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};