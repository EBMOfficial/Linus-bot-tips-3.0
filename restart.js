const { prefix } = require('./config.json')
const Discord = require('discord.js')
module.exports = (client) => {
 client.on('message', async message => {
  if (message.content === `${prefix}restart`) {
    const EBM = client.users.cache.find(user => user.id === '578634781781393419')
    if (message.author.id === '578634781781393419') {
    // Turn bot off (destroy), then turn it back on
async function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
     console.log('Sorry my crap music stopped working or something XD ZSE D')
    message.channel.send('Restarting...')
   .then(async message => {
await client.destroy()
await client.login(process.env.DISCORD_TOK)
await message.edit('Restart worked')
await console.log('Restart worked ok now piss off the bus')
})}
 resetBot(message.channel);
}  else return console.log('Some idiot other than EBM decided to try to restart the bot DX')
  }


  
});
}

