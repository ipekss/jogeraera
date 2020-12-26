const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:788002854320209920> | Logo Komutları | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:pembeok:788002853423808523> | **-dinamik** = **Dinamik logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-altın** = **Altın logo oluşturur**.  \n <a:pembeok:788002853423808523> | **-banner** = **Banner logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-basit** = **Basit logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-elmas** = **Elmas logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-sarı** = **Sarı logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-neonmavi** = **Neon mavi logo oluşturur.** \n <a:pembeok:788002853423808523> |  **-kalın** = **Kalın logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-anime** = **Anime yazı tipinde logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-habbo** = **Habbo yazı tipinde logo oluşturur.** \n <a:pembeok:788002853423808523> | **-arrow** = **Ok işaretli logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-green** = **Yeşil logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-alev** = **Alevli logo oluşturur.**  \n <a:pembeok:788002853423808523> | **-red** = **Kırmızı logo oluşturur.** ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}