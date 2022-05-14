module.exports = {
  name: "vote",
  code: `
$title[1; 　𓂃 ៸៸ vote us *!*;https://top.gg/servers/840506530809643059/vote]
$description[1;vote for our server to get a list of cool perks! voting helps us grow!

<:DotYellow:960826891391074344>gif perms in general
<:DotYellow:960826891391074344>media perms in general 
<:DotYellow:960826891391074344>special giveaways & heists
<:DotYellow:960826891391074344>exclusive role for 12 hours
<:DotYellow:960826891391074344>exclusive channels with 4x amari]
$image[1;https://images-ext-2.discordapp.net/external/n3n8Cv9jktRCwmKu9HYXbWDCdhUearOgHrGPZh3_NWk/https/media.discordapp.net/attachments/842239194037354506/926438695681269821/03.gif]
$footer[1;thank you for voting <3]
$color[1;$getVar[ecolor]]
$addButton[1;;5;https://top.gg/servers/840506530809643059/vote;no;<:bunny_love:962942580499300372>]
$cooldown[20s;]
$onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}{url:https://discord.gg/dworld}}]
`
}