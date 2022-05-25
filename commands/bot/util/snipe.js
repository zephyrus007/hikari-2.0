module.exports = [{
 name: 'snipe',
 aliases: ['sn'],
 info: "Snipe a deleted message",
 code: `
**Snipe results from <#$mentionedchannels[1;yes]>**

$author[1;$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

$addField[1;Time;<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:F>;yes]

$addField[1;Channel;<#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]>;yes]

$addField[1;Content;$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]

$footer[1;Sniped by $usertag]
$addTimestamp[1]
$color[1;$getServerVar[ecolor]]

$reply[$messageID;no]

$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;$getVar[cross] There are no recently deleted messages in that channel]

$onlyPerms[managemessages;$getVar[cross] You require \`MANAGE_MESSAGES\` permissions to use this.]
`
},{
 type: 'messageDelete',
 channel: '$channelID',
 code:`
 $setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_t;$truncate[$divide[$dateStamp;1000]]]`
}]