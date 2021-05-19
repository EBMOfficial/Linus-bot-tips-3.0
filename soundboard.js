const { prefix } = require('./config.json')
module.exports = (client) => {
  client.on('message', async message => {
    if (message.content === `${prefix}stop`) {
      if (message.member.voice.channel) {
        message.react("815717933459832924")
        message.member.voice.channel.leave();
      }
    }
  });
    client.on('message', async message => {
          // Voice only works in guilds, if the message does not come from a guild,
          // we ignore it
          if (!message.guild) return;
        
          if (message.content === `${prefix}sneeze`) {
            // Only try to join the sender's voice channel if they are in one themselves
            if (message.member.voice.channel) {
              message.react("815716068970332171")
              const connection = await message.member.voice.channel.join();
              const dispatcher = connection.play('./sounds/achoojixaw.mp3');
              dispatcher.setVolume(10);
              
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
          
            if (message.content === `${prefix}rickroll`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716924246982728")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' }));
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
          
            if (message.content === `${prefix}wow`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716069586108528")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/ringswow.mp3');
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}metal`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716069096030228")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/metalpipefalling.mp3');
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}joobidin`) {
              
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716536558944306")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://youtu.be/eMPYa-MRJNs', { filter: 'audioonly' }));
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}joe biden`) {
              
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716536558944306")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://youtu.be/eMPYa-MRJNs', { filter: 'audioonly' }));
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}kanye`) {
              
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716924280406046")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=mj4NWH6nihM', { filter: 'audioonly' }));
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}win10error`) {
              
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716536764334100")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=v76-ChTSLJk', { filter: 'audioonly' }));
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}fake error`) {
              
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716536764334100")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=v76-ChTSLJk', { filter: 'audioonly' }));
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}airpod`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815716538559496212")
                const connection = await message.member.voice.channel.join();
                const ytdl = require('ytdl-core');
                const dispatcher = connection.play(ytdl('https://youtu.be/_-UFm55WgcE', { filter: 'audioonly' }));
                dispatcher.setVolume(10);
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
          
            if (message.content === `${prefix}techsupport`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("815724629859500042")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/indiatechsupport.mp3');
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}oof`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("824325515208163338")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/oof.mp3');
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}fakeping`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("824326431395151902")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/discordping.mp3');
                dispatcher.setVolume(1);
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
          
            if (message.content === `${prefix}dababy`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("831152865841119234")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/lessgoo.mp3');
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
          
            if (message.content === `${prefix}trolling`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("832339919828680727")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/trolling.mp3');
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave()
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
          
            if (message.content === `${prefix}amogus`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("832345729635844166")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/amogus.mp3');
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave()
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
          
            if (message.content === `${prefix}amongdrip`) {
              // Only try to join the sender's voice channel if they are in one themselves
              if (message.member.voice.channel) {
                message.react("832345674992975952")
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./sounds/amongdrip.mp3');
                dispatcher.setVolume(0.5);
                dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.guild.me.voice.channel.leave()
              });
              } else {
                message.channel.send('You need to join a voice channel first!');
              }
            }
          });
}