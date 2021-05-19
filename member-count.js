module.exports = (client) => {
  const BRI = client.guilds.cache.get('597676585058828300')
  if (client.guild === (BRI)) {
  const channelId = '807992114927239229'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Blokes: ${guild.memberCount.toLocaleString()}`)
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('597676585058828300')
  updateMembers(guild)
}
}