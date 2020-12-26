const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Warshy")
.setTitle("<a:yildiz:788002854320209920> | Moderasyon Komutları | <a:yildiz:788002854320209920>")
 .setTimestamp()
.setDescription("<a:pembeok:788002853423808523> | **-sil** = **Yazdığınız miktarda mesajı siler.**  \n <a:pembeok:788002853423808523> | **-ban** = **Etiketlediğiniz kişiyi banlarsınız.**  \n <a:pembeok:788002853423808523> | **-kick** = **Etiketlediğiniz kişiyi atarsınız.**  \n <a:pembeok:788002853423808523> | **-duyuru** = **Bota duyuru yaptırırsınız.**  \n <a:pembeok:788002853423808523> | **-küfür** = **Küfür engel sistemini açarsınız.**  \n <a:pembeok:788002853423808523> | **-reklam** = **Reklam engel sistemi açarsınız.**  \n <a:pembeok:788002853423808523> | **-slowmode** = **Yavaş modu ayarlarsınız.**  \n <a:pembeok:788002853423808523> | **-forceban** = **Birisine id ban atarsınız.**  \n <a:pembeok:788002853423808523> | **-unban** = **Birisinin banını açarsınız.**  \n <a:pembeok:788002853423808523> | **-sa-as** = **Bot biri sa dedimi cevap verir.**  \n <a:pembeok:788002853423808523> | **-sunucubilgi** = **Sunucu bilgilerini görürsün.**  \n <a:pembeok:788002853423808523> | **-üyedurum** = **Üyelerin durumlarını görürsün.**  \n <a:pembeok:788002853423808523> | **-çekiliş** = **Çekiliş başlatırsınız.** ")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}