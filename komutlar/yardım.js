const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Warshy")
.setTitle("<a:yildiz:788002854320209920> | Genel Komutlar | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:ritm:788002853662752778> | **-eğlence** = **Eğlence komutlarını görüntülersiniz.** \n <a:banned:788002861463109633> | **-moderasyon** = **Moderasyon komutlarını görüntülersiniz.** \n <a:woaw:788002853180276816> | **-kullanıcı** = **Kullanıcı komutlarını görüntülersiniz.** \n <a:dorulanmis:788002854388367391> | **-logo** = **Logo komutlarını görüntülersiniz.**")
.setImage("")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}