const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const duration = moment
    .duration(client.uptime)

    .format(" D [gün], H [saat], m [dakika], s [saniye]");
//Code Universe
 //Code Universe
  let aylartoplamı = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let naberfıstık = aylartoplamı;
//Code Universe
 //Code Universe
  let s = `${moment(client.user.createdAt).format("DD")} ${
    naberfıstık[moment(client.user.createdAt).format("MM")]
  } ${moment(client.user.createdAt).format("YYYY HH:mm:ss")}`;

  const codeuniverse = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter(client.user.tag, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setTitle(`<a:yildiz:788002854320209920> | İstatistik Bilgileri | <a:yildiz:788002854320209920>`)
    .addField(
      "**<a:dance:783278929036967946> | Botun Sahibi | <a:dance:783278929036967946>**",
      "<@737361948240248833>"
    )
    .addField(
      "**<a:ritm:788002853662752778> | Hizmet Verdiği Kullanıcı Sayısı | <a:ritm:788002853662752778>**",
       client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "**<a:siyahtic:788002854266208296> | Hizmet Verdiği Sunucu Sayısı | <a:siyahtic:788002854266208296>**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "**<a:dance:783278949026627605> | Hizmet Verdiği Kanal Sayısı | <a:dance:783278949026627605>**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("**<a:ayarr:779086348585271336> | Discord.JS sürümü | <a:ayarr:779086348585271336>**", "v" + Discord.version, false)
    .addField("**<a:ayarr:779086348585271336> | Node.JS sürüm | <a:ayarr:779086348585271336>**", `${process.version}`, false)
    .addField("**<a:loading2:778930842746617876> | Ping | <a:loading2:778930842746617876>**", client.ws.ping + " ms", false)

    .addField("**<a:yildiz:779321738474946570> | Uptime Süresi | <a:yildiz:779321738474946570>**", duration)
    .addField("**Botun Kuruluş Tarihi**", s);
  return message.channel.send(codeuniverse);
};
//Code Universe
 //Code Universe
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "",
  usage: "istatistik"
};