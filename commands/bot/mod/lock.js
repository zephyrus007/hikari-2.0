module.exports =[{
    name: "lock",
    aliases: ['l'],
    info: "Locks the channel",
    code: `
$getVar[tick] Locked down **$channelName[$get[id]]**

$modifyChannelPerms[$guildID;$get[id];-sendmessage]

$let[id;$findChannel[$message;yes]]

$onlyPerms[managechannel;$getVar[cross] you are missing \`MANAGE_CHANNELS\` permission.]

$onlyBotPerms[managechannel;$getVar[cross] I'm missing \`MANAGE_CHANNELS\` permission.]

`

   }]