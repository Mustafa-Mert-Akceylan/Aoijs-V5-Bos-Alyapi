const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  mobile: false, //Botun Durumunda Telefon Görünmesini İstiyorsanız true İstemiyorsanız false yazın
  token: "TOKEN",//Buraya Tokeni Gireceksiniz
  prefix: "PREFIX",//Buraya Prefix Gireceksiniz
  intents: "all"
})

bot.readyCommand({
    channel: "",
    code: `
         $log[------------------------------------------]
         $wait[1s]
         $log[Toplam Sunucu Sayısı: $serverCount]
         $wait[1s]
         $log[Toplam Kullanıcı Sayısı: $allMembersCount]
         $wait[1s]
         $log[Botun İsmi: $userTag[$clientID]]]
         $wait[1s]
         $log[----------------Bot-Açıldı----------------]
        
 ` 
})//Bot Açılınca Konsola Hoş Bi İstatistik Atıcak


bot.onMessage() //Bunu Silmeyin Bot Çalışmaz
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")

bot.command({
name: "Selam", 
code: `Merhaba Dünya !` 
})
//Deneme Komutudur <3
//M²#0001
