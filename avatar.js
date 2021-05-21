const { prefix } = require('./config.json')
const Discord = require('discord.js')
module.exports = async (client) => {
  client.on('message', async message => {



    if (message.content.startsWith(prefix + 'avatar')) {


      if (message.mentions.users.size) {
        let member = message.mentions.users.first()
        if (member) {
          const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL({dynamic: true, format: 'png'})).setTitle(`${member.username}'s avatar`)
          message.channel.send(emb)

        }
        else {a
          message.channel.send("Sorry, no one found with that name!")

        }
      } else {
        const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({dynamic: true, format: 'png'})).setTitle(`Your avatar.`)
        message.channel.send(emb)
      }
      (console.log(`${message.author.username} just used the avatar command`))

    }
  });








}

