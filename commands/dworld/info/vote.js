module.exports = {
  name: "vote",
  code: `
$title[1;⨯・vote for us ───]
$description[1;$getVar[star] **vote for our server to get a list of cool perks!**]

$addField[1;⨯・voter perks ───;<:dw_yellowhearts:968155609952309248>**gif perms in general
<:dw_yellowhearts:968155609952309248>media perms in general 
<:dw_yellowhearts:968155609952309248>special giveaways & heists
<:dw_yellowhearts:968155609952309248>exclusive role for 12 hours
<:dw_yellowhearts:968155609952309248>exclusive channels with 4x amari**]

$color[1;$getVar[ecolor]]
$image[1;https://images-ext-2.discordapp.net/external/RrQYzXT4IBgYWqh0xS6J3ad-ijOjQ55wNFyrHG-kN5k/%3Fwidth%3D994%26height%3D24/https/media.discordapp.net/attachments/976047400210804747/978911011706896394/unknown.png]

$addButton[1;;5;https://top.gg/servers/840506530809643059/vote;no;<:bunny_love:962942580499300372>]

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

$cooldown[20s;]
$onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}{url:https://discord.gg/dworld}}]
`
}