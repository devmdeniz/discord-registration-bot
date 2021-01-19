const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  const registered = message.guild.roles.find(r => r.id === "608618667697242123");
  const unregistered = message.guild.roles.find(r => r.id === "kayitsiz rol id");
  const man = message.guild.roles.find(r => r.id === "624876519738572801")
  const woman = message.guild.roles.find(r => r.id === "624876656544186389")
  
  if (
    !message.member.roles.get("608647779568582676") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.sendEmbed(new Discord.RichEmbed()
  
    .setDescription("test"));

  let member = message.mentions.users.first() || client.users.get(args.join(' '))
  if(!member) return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").addField("Lutfen bir kullanici etiketleyin").setFooter(message.author.username))
  
  const User = message.guild.member(member) 
  const Name = args[1];
  const Old = args[2];
  const Gender = args[3];
  
  if(!Name)
    return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").addField("Lutfen bir kullanici ismi yazin").setFooter(message.author.username))
  if(!Old)
    return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").addField("Lutfen yasini belirtin").setFooter(message.author.username))
  if(!Gender)
  return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").addField("Lutfen cinsiyet belirtin").setFooter(message.author.username))

  User.addRole(registered)
  User.removeRole(unregistered)
  User.setNickname(` ${Name} | ${Old} `)

  if(Gender == "erkek") {
    User.addRole(man)
  } else if (Gender == "kiz" || "kadin" || "kız" || "kadın" ) {
    User.addRole(woman)
  } else {
    message.channel.send("Lütfen geçerli bir cinsiyet giriniz (kız veya kadın)")
  }

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Basarili")
  .setFooter("")
  message.channel.send(embed)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit"],
  permLevel: 0
};

exports.help = {
  name: "kayıt",
  description: "kullaniciyi kayit eder",
  "usage": "z!kayit isim yas cinsiyet"
}