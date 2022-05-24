module.exports = {
name:"serverinfo",
aliases: ["si"],
code: `

$author[1;$serverName[$guildID];$serverIcon]

$addField[1;Server Icon;[Click here]($serverIcon);yes]
$addField[1;Users;\`$membersCount\`;yes]
$addField[1;Roles;\`$roleCount\`;yes]  
$addField[1;Emojis;\`$emojiCount[$guildID]\`;yes]
$addField[1;Voice Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_VOICE").size;yes]\`;yes]
$addField[1;Text Channels;\`$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]\`
;yes]
$addField[1;Server ID;\`$guildID\`;yes]
$addField[1;Creation date;\`$creationDate[$guildID;date]\`;yes]
$addField[1;Owner;\`$userTag[$ownerID]\`;yes]


$addTimestamp[1]
$footer[1;Requested by $userTag]
$color[1;$getVar[ecolor]]

`
}