const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
module.exports = (client) => {
   client.on('message', async message => {
    if (message.content === `${prefix}whathappenedtoEric?`) {
      const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["CarCrash",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`This happened to my buddy Eric.`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          message.channel.send(Embed);
    }
  });
  client.on('message', async message => {
        if (message.content === `${prefix}meme`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["comedyheaven", "dank", "meme", "memes", "dankmemes",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A meme from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        

       
   
   
   
    };
  });
  client.on('message', async message => {
        if (message.content === `${prefix}cat`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["cats",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A cat from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
        }
  })
 

    client.on('message', async message => {
        if (message.content === `${prefix}cute`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["cute", "aww", "shiba", "cats", "dogs", "samoyeds"];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A cute animal from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }

       
   
   
   
    });

    client.on('message', async message => {
        if (message.content === `${prefix}shiba`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["shiba",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A cute shober from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }

     });

    client.on('message', async message => {
        if (message.content === `${prefix}kidney failure`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["Jixaw",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
           const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`'Ery noice`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }
    })
     client.on('message', async message => {
        if (message.content === `${prefix}okbhai`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["okbhaibudbak",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const advanced = await api.advanced('subreddit');
	       console.log(advanced); // Logs an object. Not all data may be present.
	       const stats = await api.stats();
	        console.log(stats); // Logs an object.
          const Embed = new Discord.MessageEmbed()
            .setTitle(`आपके पास बीड़ी है?`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img)
    
          
          message.channel.send(Embed);
                                              
       
        }
    })
    
 
          
        
                            
       
}