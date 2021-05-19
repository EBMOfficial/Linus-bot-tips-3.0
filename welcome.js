const {
   prefix,
} = require('./config.json')
const Canvas = require('canvas')
const { createCanvas, loadImage } = require("canvas");
const { registerFont } = require('canvas');
registerFont('./Oswald-Light.ttf', { family: 'FontName' });
const { MessageAttachment } = require('discord.js')
const path = require('path')
   const { getChannelId } = require('./settingWelcome.js')
   module.exports = (client) => {
    
        client.on('guildMemberAdd', async (member) => {
         // Async function
         // Destructure the guild property from the member object
         console.log(member.id, member)
         console.log(`${member.user.tag} has joined ${member.guild}.`)
         const { guild } = member
         // Access the channel ID for this guild from the cache
         const channelId = getChannelId(guild.id)
         const BoomerRatInc = client.guilds.cache.get("597676585058828300")
         if (member.guild === (BoomerRatInc)) {
         const AV = member.guild.roles.cache.find(role => role.name === "Awaiting Verification")
         member.roles.add(AV)
         }
         // Access the actual channel and send the message
         const channel = guild.channels.cache.get(channelId)
         // Create a canvas and access the 2d context
         const canvas = Canvas.createCanvas(700, 250)
         const ctx = canvas.getContext('2d')
         // Load the background image and draw it to the canvas
         const background = await Canvas.loadImage(
           path.join(__dirname, './ok.png')
         )
         let x = 0
         let y = 0
         ctx.drawImage(background, x, y)
         // Load the user's profile picture and draw it
         const pfp = await Canvas.loadImage(
           member.user.displayAvatarURL({
             format: 'png',
           })
         )
         x = canvas.width / 2 - pfp.width / 2
         y = 25
         ctx.drawImage(pfp, x, y)
         // Display user text
         ctx.fillStyle = '#ffffff' // White text
         ctx.font = '35px sans-serif'
         let text = `Welcome ${member.user.tag}!`
         x = canvas.width / 2 - ctx.measureText(text).width / 2
         ctx.fillText(text, x, 60 + pfp.height)
         // Display member count
         ctx.font = '30px sans-serif'
         text = `Member #${guild.memberCount}`
         x = canvas.width / 2 - ctx.measureText(text).width / 2
         ctx.fillText(text, x, 100 + pfp.height)
         // Attach the image to a message and send it
         const attachment = new MessageAttachment(canvas.toBuffer())
         const WelcomeChannel = member.guild.channels.cache.get(channelId)
           if (WelcomeChannel) {
         channel.send(`Hey <@${member.id}>, Welcome to ${member.guild}! On behalf of the members of this server, I wish you a warm welcome!`)
         channel.send('', attachment)
           }
       })
       client.on('guildMemberRemove', async (member) => {
        // Async function
        // Destructure the guild property from the member object
        console.log(member.id, member)
        console.log(`${member.user.tag} has left ${member.guild}.`)
        const { guild } = member
        // Access the channel ID for this guild from the cache
        const channelId = getChannelId(guild.id)
        // Access the actual channel and send the message
        const channel = guild.channels.cache.get(channelId)
        // Create a canvas and access the 2d context
        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')
        // Load the background image and draw it to the canvas
        const background = await Canvas.loadImage(
          path.join(__dirname, './ok.png')
        )
        let x = 0
        let y = 0
        ctx.drawImage(background, x, y)
        // Load the user's profile picture and draw it
        const pfp = await Canvas.loadImage(
          member.user.displayAvatarURL({
            format: 'png',
          })
        )
        x = canvas.width / 2 - pfp.width / 2
        y = 25
        ctx.drawImage(pfp, x, y)
        // Display user text
        ctx.fillStyle = '#ffffff' // White text
        ctx.font = '35px sans-serif'
        let text = `Goodbye ${member.user.tag}!`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 60 + pfp.height)
        // Display member count
        ctx.font = '30px sans-serif'
        text = `Members now: ${guild.memberCount}`
        x = canvas.width / 2 - ctx.measureText(text).width / 2
        ctx.fillText(text, x, 100 + pfp.height)
        // Attach the image to a message and send it
        const attachment = new MessageAttachment(canvas.toBuffer())
        const GoodbyeChannel = member.guild.channels.cache.get(channelId)
          if (GoodbyeChannel) {
        channel.send(`Goodbye <@${member.id}>, we wish you have a great time away from us!`)
        channel.send('', attachment)
          }
      })
        
   }