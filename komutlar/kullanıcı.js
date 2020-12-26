const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:yildiz:788002854320209920> | Kullanıcı Komutları | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:pembeok:788002853423808523> | **-avatar** = **Avatarınıza bakarsınız.**  \n <a:pembeok:788002853423808523> | **-yetkilerim** = **Yetkilerini görürsün.**  \n <a:pembeok:788002853423808523> | **-profil** = **Profilini görürsün.**  \n <a:pembeok:788002853423808523> | **-sunucuresmi** = **Sunucu resmini gösterir.**  \n <a:pembeok:788002853423808523> | **-ping** = **Botun Pingine Bakarsın.**  \n <a:pembeok:788002853423808523> | **-id** = **Birisinin id'sine Bakarsın.**  \n <a:pembeok:788002853423808523> | **-davet** = **Beni Sunucuna Ekle.**  \n <a:pembeok:788002853423808523> | **-botbilgi** = **Bot istatistiklerini görürsünüz.**  \n <a:pembeok:788002853423808523> | **-bug-bildir** = **Yazdığınız bug'u yapımcılarıma bildirir.** ")
.setImage("")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}