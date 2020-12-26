const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setAuthor(`Upper`)
    .addField(`Yetkili Kayıt Sistemi Kullanımı`,
                
                `**•** **\`-kayıt-kanal #kanal\`**\nÜyelerin Kayıt Olacağı Kanal

                 **•** **\`-kayıt-log #kanal\`**\nÜyeler Kayıt Olunca Bildirim Yollanan Kanal

                 **•** **\`-giriş-mesajı #kanal\`**\nBelirtilen Kanala Giriş Mesajı Yollar

                 **•** **\`-yetkili-rol @rol\`**\nKullanıcıyı Kayıt Edecek Olan Rol

                 **•** **\`-erkek-rol @rol\`**\nKayıt Olan Erkek Üyeye Verilecek Rol

                 **•** **\`-kadın-rol @rol\`**\nKayıt Olan Kadın Üyeye Verilecek Rol

                 **•** **\`-alınıcak-rol @rol\`**\nKayıt Olan Kullanıcıdan Alınacak Rol

                 **•** **\`-kayıtbilgi | !kayıtbilgi @kullanıcı\`**\nKullanıcının Kaç Kişiyi Kayıt Ettiğini Gösterir

                 **•** **\`-kayıt-kapat\`**\nKayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};


exports.help = {
    name: 'kayıt-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};