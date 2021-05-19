const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
 const currentDate = new Date();
module.exports = (client) => {
client.on('message', async message => {
        if (message.content === `${prefix}help`) {
            const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle('Welcome to the help command portal. Please enter one of the mentioned commands to get informed on various commands offered by me.')
	        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
	        .setDescription("For help regarding verification, please react with '✅'. For help regarding basic commands, please react with '😀'. For help regarding Disboard bump reminders, please react with '🤛'. For help regarding interactive commands, please react with '🤝'. For help regarding the leaderboard, please react with '🏆' For help regarding the soundboard, please react with '🔊'. For help regarding the YouTube video to MP3 converter, please react with '💱' For help regarding voice commands and music commands, please react with '🎶'. There are simpler ways of getting help as well. '^help verification', '^help basic', ^help bumps','^help interactive', '^help leaderboard', '^help soundboard', '^help converter' and '^help voice-music' are what you need if you want to navigate to help the old-fashioned way.")
	        .setThumbnail('https://pbs.twimg.com/media/C75B7OUVsAAENXT.jpg')
	        .setTimestamp()
            .setFooter('Hopefully you learned something! 😁');
            const HelpWait = await message.channel.send(HelpEmbed)
            HelpWait.react("✅") | HelpWait.react("😀") | HelpWait.react("🤛") | HelpWait.react("🤝") | HelpWait.react("🏆") | HelpWait.react("🔊") | HelpWait.react("💱") | HelpWait.react("🎶")
            const filter = (reaction, user) => {
              return ['✅', '😀', '🤛', '🤝', '🏆', '🔊', '💱', '🎶'].includes(reaction.emoji.name) && user.id === message.author.id;
          }; 
            HelpWait.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	         .then(collected => {
		       const reaction = collected.first();

		       if (reaction.emoji.name === "✅") {
            const VerificationHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("For starters, the command '^verify check' enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as 'verify check (insert user here)').") 
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(VerificationHelpEmbed)
            HelpWait.reactions.removeAll()
		       } else if (reaction.emoji.name === "😀") {
            const BasicHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("For starters, the command '^avatar' will deliver either your avatar or the mentioned user's avatar, depending on how it is used. The command '^emoji' will show you all of the emojis in your server. For now, this command only works in servers with 50 emojis or below. The command '^purge' is available for administrators only. You can delete upto 100 messages in your desired channel. The command '^shiba' will get an image of a Shiba Inu dog from subreddit 'r/shiba'. The command '^meme' will get a meme from reputed meme subreddits. The command '^cute' will get an image of a cute animal from various subreddits. The command '^whathappenedtoEric?' will show you what really happened to Eric. The command '^kidney failure' will get an image of your favorite brick from subreddit 'r/Jixaw'. The command '^okbhai' will get you an image from r/okbhaibudbak. The command '^coinflip' can be used in events of bets or for just about everything, and finally, the command '^vibecheck' will give you your vibe percentage. Image manipulation commands are ``^delete (insert optional user here)``, ``^affect (insert optional user here)``, ``^trash (insert optional user here)``, ``^gay (insert optional user here)``, ``^triggered (insert optional user here)``, ``^batslap (@User1 @User2)``, ``^rip (insert optional user here)``, ``^stonk (insert optional user here), ``^lisapresentation (insert text here)``, ``^bed (@User1 @User2)``, ``^spank (@User1 @User2)``, ``^notstonks (insert optional user here)``, ``^M&Ms (insert optional user here)``, ``^kiss (@User1 @User2)``, ``^hitler (insert optional user here)`` and ``^jail (insert optional user here)``. More image manipulation commands will be added over time.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js. Note that ``insert optional user here`` means that you can also ping another user in the server and the bot will pull their profile picture and put it in the image.")
            HelpWait.edit(BasicHelpEmbed)
            HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤛") {
            const BumpHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("This is pretty simple. To get started, use the command '^setBumpChannel' to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command '^createBumpRole' to create the bumping ping role which the bot will ping every two hours. Then, use the command '^giveBumpRole' to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command '^setReminder' to start the 2 hour reminder. After the bot pings the role, simply use the command '!d bump' to keep the reminder steady. ")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(BumpHelpEmbed)
            HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤝") {
             const InteractiveHelpEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
             .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
             .setDescription("For activation of the points channel, use the command '^setLeaderboardChannel' to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command '^leaderboard'. Finally, if you want to change the points channel, simply go to your new desired channel and use the command '^setLeaderboardChannel' there. For activation of the welcome channel, simply go to your system channel and use the command '^setWelcomeChannel' there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones!")
             HelpWait.edit(InteractiveHelpEmbed)
             HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🏆') {
              const LeaderboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the leaderboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('After the activation of the points channel in the server (please refer to the interactive help section if you have not set up the channel), you will be able to post attachments to earn points. Linus Bot Tips offers awards as well. The Rocket Like award gives OP an extra 2 points and removes 2 points from your points balance, the Wholesome award gives OP an extra 3 points and removes 3 points from your points balance, the Silver award gives OP an extra 5 points and removes 5 points from your points balance, the Gold award gives OP an extra 10 points and removes 10 points from your points balance, and the Diamond award gives OP an extra 20 points and removes 20 points from your points balance. ')
              HelpWait.edit(LeaderboardHelpEmbed)
             HelpWait.reactions.removeAll()

            } else if (reaction.emoji.name === '🔊') {
               const soundboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the soundboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('Soundboard commands are ``^sneeze``, ``^rickroll``, ``^wow``, ``^metal``, ``^joobidin``, ``^kanye``, ``^win10error``,  ``^airpod``, ``^techsupport``, ``^oof``, ``^fakeping``, ``^dababy``, ``^trolling``, ``^amogus`` and ``^amongdrip``. Linus Bot Tips supports a limited amount of soundboard commands for now. In the future, more of these commands will be added.')
              HelpWait.edit(soundboardHelpEmbed)
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === `💱`) {
              const converterHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the YouTube video to MP3 converter.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('The way to download a youtube video in MP3 format is to use the ``^linkdownload (insert url)`` command. If you are in a voice channel, the bot will give you the option to play the converted file in the voice channel that you are in. If you say yes, the bot will join your voice channel and play the file. If you say no, then the bot will not join the channel and play the file. Please keep in mind that you should only interact with the voice channel option after the bot is done converting the file. Once you are done with the audio, use the command "^leave" to terminate the audio connection.')
               HelpWait.edit(converterHelpEmbed)
              HelpWait.reactions.removeAll()
            } else if (reaction.emoji.name === '🎶') {
              const VoiceMusicEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about voice commands and music commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              addFields(
                 { name: '\u200B', value: '\u200B'},
                 { name: '**VOICE COMMANDS**', value: '``computer help``, ``computer play [random, favorites, <genre> or query]``,``computer skip``, ``computer pause/resume``, ``computer shuffle``, ``computer genres``, ``computer set favorite``, ``computer favorites``, ``computer list``, ``computer clear list``'},
                 { name: '\u200B', value: '\u200B'},
                  { name: '**VOICE SOUNDBOARD COMMANDS**', value: '``computer sneeze``, ``computer rickroll``,``computer wow``, ``computer metal``, ``computer joobidin (NON-FUNCTIONAL FOR NOW)``, ``computer kanye``, ``computer win10error (NON-FUNCTIONAL FOR NOW)``, ``computer airpod (NON-FUNCTIONAL FOR NOW)``, ``computer techsupport (NON-FUNCTIONAL FOR NOW)``, ``computer oof (NON-FUNCTIONAL FOR NOW)`` ``computer fakeping(NON-FUNCTIONAL FOR NOW)``, ``computer dababy (NON-FUNCTIONAL FOR NOW)``, ``computer trolling``, ``computer amogus (NON-FUNCTIONAL FOR NOW)``, ``computer amongdrip (NON-FUNCTIONAL FOR NOW)``'},
                 { name: '\u200B', value: '\u200B'},
                 { name: '**TEXT COMMANDS**', value: "``^support``, ``^join/^leave``, ``^play [query]``, ``^random``, ``^pause/^resume``, ``^skip``, ``^shuffle``, ``^favorite``,``^unfavorite [name]``, ``^favorites``, ``^genres``, ``^list``, ``^clear``"},
              )
               HelpWait.edit(VoiceMusicEmbed)
              HelpWait.reactions.removeAll()
            }
			     
           })
          

          }

    }); 
    client.on('message', async message => {
      if (message.content === `${prefix}help verification`) {
        const VerificationHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For starters, the command '^verify check' enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as 'verify check (insert user here)').") 
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
       message.channel.send(VerificationHelpEmbed)
      } else if (message.content === `${prefix}help basic`) {
        const BasicHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For starters, the command '^avatar' will deliver either your avatar or the mentioned user's avatar, depending on how it is used. The command '^emoji' will show you all of the emojis in your server. For now, this command only works in servers with 50 emojis or below. The command '^purge' is available for administrators only. You can delete upto 100 messages in your desired channel. The command '^shiba' will get an image of a Shiba Inu dog from subreddit 'r/shiba'. The command '^meme' will get a meme from reputed meme subreddits. The command '^cute' will get an image of a cute animal from various subreddits. The command '^whathappenedtoEric?' will show you what really happened to Eric. The command '^kidney failure' will get an image of your favorite brick from subreddit 'r/Jixaw'. The command '^okbhai' will get you an image from r/okbhaibudbak. The command '^coinflip' can be used in events of bets or for just about everything, and finally, the command '^vibecheck' will give you your vibe percentage. Image manipulation commands are ``^delete (insert optional user here)``, ``^affect (insert optional user here)``, ``^trash (insert optional user here)``, ``^gay (insert optional user here)``, ``^triggered (insert optional user here)``, ``^batslap (@User1 @User2)``, ``^rip (insert optional user here)``, ``^stonk (insert optional user here), ``^lisapresentation (insert text here)``, ``^bed (@User1 @User2)``, ``^spank (@User1 @User2)``, ``^notstonks (insert optional user here)``, ``^M&Ms (insert optional user here)``, ``^kiss (@User1 @User2)``, ``^hitler (insert optional user here)`` and ``^jail (insert optional user here)``. More image manipulation commands will be added over time.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js. Note that ``insert optional user here`` means that you can also ping another user in the server and the bot will pull their profile picture and put it in the image.")
         message.channel.send(BasicHelpEmbed)

      } else if (message.content === `${prefix}help bumps`) {
        const BumpHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("This is pretty simple. To get started, use the command '^setBumpChannel to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command '^createBumpRole' to create the bumping ping role which the bot will ping every two hours. Then, use the command '^giveBumpRole' to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command '^setReminder' to start the 2 hour reminder. After the bot pings the role, simply use the command '!d bump' to keep the reminder steady. ")
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
         message.channel.send(BumpHelpEmbed)
      } else if (message.content === `${prefix}help interactive`) {
        const InteractiveHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For activation of the points channel, use the command '^setLeaderboardChannel' to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command '^leaderboard'. Finally, if you want to change the points channel, simply go to your new desired channel and use the command '^setLeaderboardChannel' there. For activation of the welcome channel, simply go to your system channel and use the command '^setWelcomeChannel' there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones!")
         message.channel.send(InteractiveHelpEmbed)
       } else if (message.content === `${prefix}help leaderboard`) {
          const LeaderboardHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the leaderboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('After the activation of the points channel in the server (please refer to the interactive help section if you have not set up the channel), you will be able to post attachments to earn points. Linus Bot Tips offers awards as well. The Rocket Like award gives OP an extra 2 points and removes 2 points from your points balance, the Wholesome award gives OP an extra 3 points and removes 3 points from your points balance, the Silver award gives OP an extra 5 points and removes 5 points from your points balance, the Gold award gives OP an extra 10 points and removes 10 points from your points balance, and the Diamond award gives OP an extra 20 points and removes 20 points from your points balance. ')
           message.channel.send(LeaderboardHelpEmbed)
       } else if (message.content === `${prefix}help soundboard`) {
         const soundboardHelpEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the soundboard.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .setDescription('Soundboard commands are ``^sneeze``, ``^rickroll``, ``^wow``, ``^metal``, ``^joobidin``, ``^kanye``, ``^win10error``,  ``^airpod``, ``^techsupport``, ``^oof``, ``^fakeping``, ``^dababy``, ``^trolling``, ``^amogus`` and ``^amongdrip``. Linus Bot Tips supports a limited amount of soundboard commands for now. In the future, more of these commands will be added.')
          message.channel.send(soundboardHelpEmbed)
       } else if (message.content ===`${prefix}help converter`) {
          const converterHelpEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about the YouTube video to MP3 converter.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
               .setDescription('The way to download a youtube video in MP3 format is to use the ``^linkdownload (insert url)`` command. If you are in a voice channel, the bot will give you the option to play the converted file in the voice channel that you are in. If you say yes, the bot will join your voice channel and play the file. If you say no, then the bot will not join the channel and play the file. Please keep in mind that you should only interact with the voice channel option after the bot is done converting the file. Once you are done with the audio, use the command "^leave" to terminate the audio connection.')
              message.channel.send(converterHelpEmbed)
       } else if (message.content === `${prefix}help voice-music`) {
          const VoiceMusicEmbed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`${message.author.username}, here is everything you need to know about voice commands and music commands.`)
              .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
              .addFields(
                 { name: '\u200B', value: '\u200B'},
                 { name: '**VOICE COMMANDS**', value: '``computer help``, ``computer play [random, favorites, <genre> or query]``,``computer skip``, ``computer pause/resume``, ``computer shuffle``, ``computer genres``, ``computer set favorite``, ``computer favorites``, ``computer list``, ``computer clear list``'},
                 { name: '\u200B', value: '\u200B'},
                  { name: '**VOICE SOUNDBOARD COMMANDS**', value: '``computer sneeze``, ``computer rickroll``,``computer wow``, ``computer metal``, ``computer joobidin (NON-FUNCTIONAL FOR NOW)``, ``computer kanye``, ``computer win10error (NON-FUNCTIONAL FOR NOW)``, ``computer airpod (NON-FUNCTIONAL FOR NOW)``, ``computer techsupport (NON-FUNCTIONAL FOR NOW)``, ``computer oof (NON-FUNCTIONAL FOR NOW)`` ``computer fakeping(NON-FUNCTIONAL FOR NOW)``, ``computer dababy (NON-FUNCTIONAL FOR NOW)``, ``computer trolling``, ``computer amogus (NON-FUNCTIONAL FOR NOW)``, ``computer amongdrip (NON-FUNCTIONAL FOR NOW)``'},
                 { name: '\u200B', value: '\u200B'},
                 { name: '**TEXT COMMANDS**', value: "``^support``, ``^join/^leave``, ``^play [query]``, ``^random``, ``^pause/^resume``, ``^skip``, ``^shuffle``, ``^favorite``,``^unfavorite [name]``, ``^favorites``, ``^genres``, ``^list``, ``^clear``"},
              )
              message.channel.send(VoiceMusicEmbed)

       }
    });




}