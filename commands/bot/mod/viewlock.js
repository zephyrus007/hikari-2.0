module.exports =[{
    name: "viewlock",
    aliases: ['vl'],
    info: "ViewLocks the channel",
    code: `
$getVar[tick] Viewlocked down **$channelName[$get[id]]**

$modifyChannelPerms[$guildID;$get[id];-viewchannel]

$let[id;$findChannel[$message;yes]]

$onlyPerms[managechannel;$getVar[cross] you are missing \`MANAGE_CHANNELS\` permission.]

$onlyBotPerms[managechannel;$getVar[cross] I'm missing \`MANAGE_CHANNELS\` permission.]

`

   }]