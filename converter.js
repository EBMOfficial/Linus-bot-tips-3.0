module.exports = (client) => {
  const ScrapeYt = require("scrape-yt");
const spotify = require("spotify-url-info")
const Discord = require("discord.js");
const YTDL = require("discord-ytdl-core");
const { createWriteStream } = require("fs");

//Config file
const Config = require('./config.json')

//New discord.js client

//Event ready


client.on("message", async message => {

    //Do not detect bots
    if (message.author.bot) return;

    //If '<prefix>linkdownload' is typed
    if (message.content.startsWith(Config.prefix + "linkdownload")) {

        //Require args
        let args = message.content.split(' ').slice(1);

        //If no args is provided
        if (!args[0]) return message.channel.send(`⛔ | ${message.author}, Please enter the YouTube URL of a video!`);

        //New infos & stream
        let infos;
        let stream;

        try {
            //The bot is trying to find the music provided
            stream = YTDL(args.join(" "), { encoderArgs: ['-af','dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });
            infos = await ScrapeYt.search(args.join(" "));
        } catch (e) {
            //If the music is not found
            return message.channel.send(`⛔ | ${message.author}, I didn't find anything for : ${args.join(" ")} !`);
        }

        try {
            //Confirmation message
            message.channel.send(`:notes: | ${message.author},  I'll try to send ${infos[0].title} when the download is finished...`);

            //Saving the file in the folder 'download'
            stream.pipe(createWriteStream(__dirname + `/download/${infos[0].title}.mp3`)).on('finish', () => {

                //Sending the mp3 file
                try {
                    message.channel.send(`🎵 | ${message.author}, here is your file ${infos[0].title} in MP3 format.`, new Discord.MessageAttachment(__dirname + `/download/${infos[0].title}.mp3`, `${infos[0].title}.mp3`))
                } catch (e) {
                    return message.channel.send(`⛔ | ${message.author}, I am not able to send the music. Maybe, it is because the file is too heavy for Discord. Or it could be that I do not have the required permissions to upload this type of file on this server.`);
                }

            })
        } catch (e) {
            //If the music is not found
            return message.channel.send(`⛔ | ${message.author}, I didn't find anything for : ${args.join(" ")} ! Maybe it is impossible to retrieve this video.`);
        }
        if (message.member.voice.channel) {
          const X = await message.channel.send(`Hello ${message.author.username}, I see that you are currently in a voice channel. Shall I relay this mp3 file to your channel? NOTE: RESPOND TO THIS MESSAGE ONLY AFTER I HAVE SENT THE MP3 FILE.`)
          X.react("👍").then(X.react("👎"))
          const filter = (reaction, user) => {
	        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
          };

          X.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	        .then(async collected => {
		      const reaction = collected.first();

		      if (reaction.emoji.name === '👍') {
			    message.reply(`Alright then, I will join your channel/skip this file to play the converted audio.`);
          const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(`./download/${infos[0].title}.mp3`);
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave();
              });

		      } else {
			    message.reply('Got it. Have a good day XD!');
		      }
	        })
	        
        }
       
    }
    


});
client.on("message", async message => {

    //Do not detect bots
    if (message.author.bot) return;

    //If '<prefix>linkdownload' is typed
    if (message.content.startsWith(Config.prefix + "videolinkdownload")) {

        //Require args
        let args = message.content.split(' ').slice(1);

        //If no args is provided
        if (!args[0]) return message.channel.send(`⛔ | ${message.author}, Please enter the YouTube URL of a video!`);

        //New infos & stream
        let infos;
        let stream;

        try {
            //The bot is trying to find the music provided
            stream = YTDL(args.join(" "));
            infos = await ScrapeYt.search(args.join(" "));
        } catch (e) {
            //If the music is not found
            return message.channel.send(`⛔ | ${message.author}, I didn't find anything for : ${args.join(" ")} !`);
        }

        try {
            //Confirmation message
            message.channel.send(`:notes: | ${message.author},  I'll try to send ${infos[0].title} when the download is finished...`);

            //Saving the file in the folder 'download'
            stream.pipe(createWriteStream(__dirname + `/download/${infos[0].title}.mp4`)).on('finish', () => {

                //Sending the mp3 file
                try {
                    message.channel.send(`🎵 | ${message.author}, here is your file ${infos[0].title} in MP4 format.`, new Discord.MessageAttachment(__dirname + `/download/${infos[0].title}.mp4`, `${infos[0].title}.mp4`))
                } catch (e) {
                    return message.channel.send(`⛔ | ${message.author}, I am not able to send the music. Maybe, it is because the file is too heavy for Discord. Or it could be that I do not have the required permissions to upload this type of file on this server.`);
                }

            })
        } catch (e) {
            //If the music is not found
            return message.channel.send(`⛔ | ${message.author}, I didn't find anything for : ${args.join(" ")} ! Maybe it is impossible to retrieve this video.`);
        }
    
       
    }
    


});
}