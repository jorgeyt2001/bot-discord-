const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "366038927812853763") return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
               .then(() => bot.login("NTQ4MTU5NjM4ODIyOTc3NTY2.XcQ6tw.UwEldLSr-iXLFFKrTMhVytfieAo"));
           message.channel.send("``[bot administrador rankeds] has successfully rebooted!``")
       }
    }