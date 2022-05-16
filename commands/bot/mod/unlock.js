module.exports =[{
    name: "unlock",
    aliases: ['u'],
    info: "Unlocks the channel",
    code: `
$getVar[tick] Unlocked **$channelName[$get[id]]**

$modifyChannelPerms[$guildID;$get[id];/sendmessage]

$let[id;$findChannel[$message;yes]]

$onlyPerms[managechannel;$getVar[cross] You are missing \`MANAGE_CHANNELS\` permission.]

$onlyBotPerms[managechannel;$getVar[cross] I'm missing \`MANAGE_CHANNELS\` permission.]

`

   }]