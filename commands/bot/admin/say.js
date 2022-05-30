module.exports = {
name: "say",
code:
`

$addCmdReactions[<:org_checkmark:966229530106810388>
]

$channelSendMessage[$get[id];$replaceText[$message;$message[1];;1]]

$let[id;$findChannel[$message[1];yes]]

$channelSendMessage[$getServerVar[bot_glogs];{newEmbed:{title:Command Logs}
{author:$usertag:$userAvatar}
{description:\`$getServerVar[prefix]$commandName\` has been used.}
{field:User:<@$authorID>}
{field:User ID:$authorID}
{field:Content:$message}
{field:Content ID:$messageID}
{field:Channel:<#$channelID>}
{field:Channel ID:$channelID}
{thumbnail:$serverIcon}
{footer:Hikari Logs:https#COLON#//cdn.discordapp.com/emojis/979402046098776084.webp}
{timestamp}
{color:$getVar[ecolor]}
}]

$onlyIf[$message[2]!=;$getVar[star] Provide a message. {delete:5s}]

$onlyIf[$message[1]!=;$getVar[star] Provide a channel. {delete:5s}]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission. {delete:5s}]
`
  
}