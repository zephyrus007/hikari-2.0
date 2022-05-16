module.exports =[{
    name: "unviewlock",
    aliases: ['uvl'],
    info: "Unlocks the channel",
    code: `
$getVar[tick] Unviewlocked **$channelName[$get[id]]**

$modifyChannelPerms[$guildID;$get[id];/viewchannel]

$let[id;$findChannel[$message;yes]]

$onlyPerms[managechannel;$getVar[cross] You are missing \`MANAGE_CHANNELS\` permission.]

$onlyBotPerms[managechannel;$getVar[cross] I'm missing \`MANAGE_CHANNELS\` permission.]

`

   }]