const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ok smelly'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ================= START BOT CODE ===================
const Discord = require('discord.js')
const {
  prefix,
} = require('./config.json')
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const fs = require('fs')
const config = require('./config.json')
client.login(process.env.DISCORD_TOK)
client.setMaxListeners(10000000);
var date = new Date().toLocaleString();
const welcome = require('./welcome.js')
const purge = require('./purge.js')
const agree = require('./agree.js')
const help = require('./help.js')
const vibecoin = require('./VBCF.js')
const leaderboardOne = require('./leaderboardOne.js')
const emoji = require('./emoji.js')
const verifycheck = require('./verifycheck.js')
const bumprole = require('./bumprole.js')
const redditpull = require('./redditpull.js')
const channelrole = require('./VCRole.js')
const setReminder = require('./setReminder.js')
const settingLeaderboard = require('./settingLeaderboard.js')
const settingWelcome = require('./settingWelcome.js')
const settingBumps = require('./settingBumps.js')
const membercount = require('./member-count.js')
const botjoin = require('./botjoin.js')
const avatar = require('./avatar.js')
const soundboard = require('./soundboard.js')
const update = require('./update.js')
const converter = require('./converter.js')
const voicerecognition = require('./voicerecognition.js')
const restart = require('./restart.js')
const imagegen = require('./imagegen.js')







client.on('ready', () => {

  console.log("Connected as " + client.user.tag)


  setInterval(() => { 
    const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
    client.user.setActivity(`Kidney failure unfold | Serving ${client.guilds.cache.size} servers and ${memberCount} members | ^help`, { type: "WATCHING" })
  }, 500);


  client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    guild.channels.cache.forEach((channel) => {
      console.log(`${channel.name} ${channel.type} ${channel.id}`)
    })

  });

 
  

  welcome(client)
  purge(client)
  agree(client)
  help(client)
  vibecoin(client)
  leaderboardOne(client)
  emoji(client)
  verifycheck(client)
  bumprole(client)
  redditpull(client)
  channelrole(client)
  setReminder(client)
  settingLeaderboard(client)
  settingWelcome(client)
  settingBumps(client)
  membercount(client)
  botjoin(client)
  avatar(client)
  soundboard(client)
 // update(client)
  converter(client)
  voicerecognition(client)
  restart(client)
  imagegen(client)



  

  

  client.on('message', async message => {
      if (message.content === `${prefix}time`) {
        // inside a command
        const currentDate = new Date();
        message.channel.send(currentDate.toLocaleString());


      }
 



    });

   client.on('message', async message => {
      if (message.content.includes(`buy a volvo`)) {
       message.delete()


      }
 



    });
    
    

    
  
  
});
