const { prefix } = require('./config.json')
const Discord = require('discord.js')
module.exports = (client) => {
  client.on('message', async message => {
            // Voice only works in guilds, if the message does not come from a guild,
            // we ignore it
            if (!message.guild) return;
          
            if (message.content === `${prefix}radio lofi`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://youtu.be/5qap5aO4i9A'));
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave();
              });
              } else {
                message.channel.send('You need to join a voice channel first!');
              }
            }
          });

  client.on('message', async message => {
            // Voice only works in guilds, if the message does not come from a guild,
            // we ignore it
            if (!message.guild) return;
          
            if (message.content === `${prefix}radio mirchi`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play('http://tun.in/sepiI');
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave();
              });
              } else {
                message.channel.send('You need to join a voice channel first!');
              }
            }
          });

}