const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  const registered = message.guild.roles.find(r => r.id === "608618667697242123");
  const unregistered = message.guild.roles.find(r => r.id === "id");//unregistered role id
  const man = message.guild.roles.find(r => r.id === "624876519738572801") // Male role id
  const woman = message.guild.roles.find(r => r.id === "624876656544186389") // Woman role id
  
  if (
    !message.member.roles.get("608647779568582676")  && //server id
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.sendEmbed(new Discord.RichEmbed()
  
    .setDescription("test"));

  let member = message.mentions.users.first() || client.users.get(args.join(' '))
  if(!member) return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").addField("Please mention a member").setFooter(message.author.username))
  
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

  if(Gender == "male") {
    User.addRole(man)
  } else if (Gender == "woman") {
    User.addRole(woman)
  } else {
    message.channel.send("Please enter a valid gender (male or woman)")
  }

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Successful")
  .setFooter("Congratulations")
  message.channel.send(embed)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["register"],
  permLevel: 0
};

exports.help = {
  name: "registeruser",
  description: "",
  usage: ""
}