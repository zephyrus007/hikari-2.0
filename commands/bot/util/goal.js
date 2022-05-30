module.exports = {
    name: "goal",
    aliases: ["go", "g"],
    code: `

$title[1;⨯・server goal ────]
    
    
$description[1;<a:dwr_sparkle:961913682751803442> **goal:** \`$getServerVar[goal_count]\`
<a:dwr_sparkle:961913682751803442> **current users:** \`$membersCount\`
<a:dwr_sparkle:961913682751803442> **required users:** \`$sub[$getServerVar[goal_count];$membersCount]\`]
    
$color[1;$getVar[ecolor]]
$thumbnail[1;$serverIcon]
$image[1;https://media.discordapp.net/attachments/976047400210804747/978911011706896394/unknown.png?width=1025&height=25]

$channelSendMessage[$getServerVar[bot_glogs];{newEmbed:{title:Command Logs}
{author:$usertag:$userAvatar}
{description:\`$getServerVar[prefix]$commandName\` has been used.}
{field:User:<@$authorID>}
{field:User ID:$authorID}
{field:Content ID:$messageID}
{field:Channel:<#$channelID>}
{field:Channel ID:$channelID}
{thumbnail:$serverIcon}
{footer:Hikari Logs:https#COLON#//cdn.discordapp.com/emojis/979402046098776084.webp}
{timestamp}
{color:$getVar[ecolor]}
}]

$reply[$messageID;no]

$onlyIf[$getServerVar[goal_count]!=;$getVar[star] Goal system isn't configured yet.
\`\`\`js
$getServerVar[prefix]set-goal [goal-count]
\`\`\`]

`
}