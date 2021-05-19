const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
 const currentDate = new Date();
module.exports = (client) => {
   client.on('message', async message => { 
    if(message.content.startsWith(prefix+'verify check')){
    if(message.mentions.users.size){
      let member1=message.mentions.users.first()
      const member2 = message.guild.members.cache.get(member1.id)
          if(member1){
            if (message.member.hasPermission("ADMINISTRATOR")) {
            const VerifyCheckEmbed = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle("There is already a checkmark besides their name!")
          .setThumbnail('https://cdn.discordapp.com/attachments/706933134368964608/777565641795698738/unknown.png')
          .addFields(
            {name: '\u200b', value: '\u200b'},
            {name: 'They already have the check mark besides your name!', value: `Hi ${message.author.username}, it seems that ${member1.username} already has the verified check mark!`},
          )
          .setTimestamp()
          if (member2.displayName.endsWith("✅")) {
            return message.channel.send(VerifyCheckEmbed).then(console.log(`Turns out ${member1.username} is already verified! Timestamp - ${currentDate.toLocaleString()}.`))
            
          }
              member2
          .setNickname(`${member2.displayName} ✅`)
          .catch((err) => console.log(err));
          if (message.guild.id === '597676585058828300') {
           const VerifiedRole = message.guild.roles.cache.find(role => role.name === 'Verified ✅')
          member2.roles.add(VerifiedRole)
        }
        message.react("✔");
        console.log(`Successfully verified ${member2} on ${currentDate.toLocaleString()}.`);
        const VerifyEmbed = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setTitle(`${member1.username} has been verified.`)
          .setImage('https://media.discordapp.net/attachments/706933134368964608/777564083704561674/unknown.png')
          .setTimestamp()
          
        message.channel.send(VerifyEmbed)
            } else return message.channel.send(`Hey ${message.author.username}, your permissions are too low!`) 
          }
          else{
              message.channel.send("Sorry none found with that name")
    
          }
        } else {
          const VerifyCheckEmbed2 = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle("There is already a checkmark beside your name!")
          .setThumbnail('https://cdn.discordapp.com/attachments/706933134368964608/777565641795698738/unknown.png')
          .addFields(
            {name: '\u200b', value: '\u200b'},
            {name: 'You already have the check mark besides your name!', value: `Hi ${message.author.username}, it seems that you already have the verified check mark! If you're interested, please inform a mate who doesn't have it to verify themselves!`},
          )
          .setTimestamp()
        if (message.member.displayName.endsWith("✅")) {
          return (await message.channel.send(VerifyCheckEmbed2)).attachments(console.log(`Turns out ${message.author.username} is already verified! Timestamp - ${currentDate.toLocaleString()}.`))
        }
          
      
        message.member
          .setNickname(`${message.member.displayName} ✅`)
          .catch((err) => console.log(err));
        if (message.guild.id === '597676585058828300') {
           const VerifiedRole = message.guild.roles.cache.find(role => role.name === 'Verified ✅')
          message.member.roles.add(VerifiedRole)
        }
        message.react("✔");
        console.log(`Successfully verified ${message.member} on ${currentDate.toLocaleString()}.`);
        const VerifyEmbed2 = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setTitle("You're all set!")
          .setThumbnail('https://media.discordapp.net/attachments/706933134368964608/777564083704561674/unknown.png')
          .addFields(
            {name: '\u200b', value: '\u200B'},
            {name: 'You now have the check mark besides your name!', value: "Time to flex on all of them unverified plebs!? 😳"},
          )
          .setTimestamp()
          
        message.channel.send(VerifyEmbed2)
      }

      
    }  
    
    
    
    });
  client.on('message', async XDmessage => {
    if (XDmessage.guild.id === '597676585058828300') {
      console.log(XDmessage.author.username)
      if (XDmessage.author.bot) return;
      const men = XDmessage.member.displayName.endsWith("✅")
      const bloke = XDmessage.author.username.endsWith("✅")
      const lad = XDmessage.member.roles.cache.some(role => role.name === "Verified ✅")
        if (men || bloke || lad) {
           console.log('yes')
         } else XDmessage.delete()
          
      }




      });
      

  client.on('message', async message => {
    if (message.guild.id === '597676585058828300') {
      console.log('pass')
      if (message.author.bot) return;
       if (message.content === `${prefix}verifyall`) {
         const VerifiedRole = message.guild.roles.cache.find(role => role.name === 'Verified ✅')
         message.guild.members.cache.forEach(member => member.roles.add(VerifiedRole).then(message.channel.send(`${member.displayName} has been verified.`)));

       }
    }





  });

}