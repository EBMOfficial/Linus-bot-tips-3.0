const { prefix } = require('./config.json')
const Discord = require('discord.js')
module.exports = (client) => {
  client.guilds.cache.forEach((guild) => {
     const UpdateEmbed = new Discord.MessageEmbed()
  .setTitle(`Hello users of ${guild}!`)
  .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
  .setDescription("Linus Bot Tips now supports image manipulation commands! Use the command '^help basic' to learn more.")
  .setFooter('Changelog v2.9')
  .setTimestamp()
  guild.systemChannel.send(UpdateEmbed)
  });
}