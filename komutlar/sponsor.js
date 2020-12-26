const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Warshy")
.setTitle("<a:yildiz:788002854320209920> | Sponsorumuz | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:dorulanmis:788002854388367391> | **Muck Zula** | <a:dorulanmis:788002854388367391>\n [__**Tıklayarak Kanalı Görebilirsin !**__](https://www.youtube.com/channel/UCOEL5YF75JCigEnwwkhRgrA)")
.setImage("")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["sponsor"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sponsor',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'sponsor'
}