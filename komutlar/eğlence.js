const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:788002854320209920> | Eğlence Komutları | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:pembeok:788002853423808523> | **-tersyazı** = **Bir Yazıyı Bot Ters Yazar.** \n <a:pembeok:788002853423808523> | **-mcskin** = **Yazdığınız ismin minecraft görünüşünü atar.**  \n <a:pembeok:788002853423808523> | **-fbi** = **Bot FBi Gif Atar.**  \n <a:pembeok:788002853423808523> | **-token** = **Tokenimi Öğrenmek İstemezmisin?**  \n <a:pembeok:788002853423808523> | **-düello** = **Düello Atarsın.**  \n <a:pembeok:788002853423808523> | **-wasted** = **Polis tarafından yakalanırsın.**  \n <a:pembeok:788002853423808523> | **-atatürk** = **Dene ve gör... (1881-1938)** ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}