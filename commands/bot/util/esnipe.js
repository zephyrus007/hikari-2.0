module.exports = [{
 name: 'esnipe',
 aliases: ['esn'],
 $if: 'v4',
 info: "Snipe a edited message",
 code: `
**Snipe results from <#$mentionedchannels[1;yes]>**

$author[1;$userTag[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[esnipe_author;$mentionedChannels[1;yes]]]]

$addField[1;Time;<t:$getChannelVar[esnipe_t;$mentionedChannels[1;yes]]:F>;yes]

$addField[1;Channel;<#$getChannelVar[esnipe_channel;$mentionedChannels[1;yes]]>;yes]

$addField[1;Content;$getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]]

$footer[1;Sniped by $usertag]
$addTimestamp[1]
$color[1;$getServerVar[ecolor]]

$onlyIf[$getChannelVar[esnipe_msg;$mentionedChannels[1;yes]]!=;$getVar[cross] There are no recently edited messages in that channel]

$reply[$messageID;no]

$onlyPerms[managemessages;$getVar[cross] You require \`MANAGE_MESSAGES\` permissions to use this.]
`
},{
 type: 'messageUpdate',
 channel: '$channelID',
 code:`
 $setChannelVar[esnipe_msg;$oldMessage]
 $setChannelVar[esnipe_author;$authorID]
 $setChannelVar[nesnipe_msg;$Message]
 $setChannelVar[esnipe_channel;$channelID]
 $setChannelVar[esnipe_t;$truncate[$divide[$dateStamp;1000]]]

`
}]