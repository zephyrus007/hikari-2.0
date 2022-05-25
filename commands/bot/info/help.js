module.exports =
  [{
    name: "help",
    $if: "v4",
    code: `
$deleteIn[10m]

$if[$authorID==$botOwnerID]

$author[1;$userName[$clientID];$userAvatar[$clientID]]
$title[1;Commands list]
$description[1;Server Prefix: \`$getServerVar[prefix]\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・utility commands;\`avatar\` \`bans\` \`divider\` \`esnipe\` \`snipe\` \`whois\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・music commands;\`join\` \`leave\` \`nowplaying\` \`play\` \`pause\` \`resume\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・mod commands;\`ban\` \`lock\` \`unban\` \`unlock\` \`unviewlock\` \`viewlock\`]


$addField[1;<a:dwr_sparkle:961913682751803442>・info commands;\`help\` \`ping\` \`uptime\` \`serverinfo\` \`servericon\` \`stats\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・fun commands;\`enter\` \`exit\` \`fact\` \`ppsize\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・action commands;\`baka\` \`bite\` \`cuddle\` \`feed\` \`highfive\` \`hug\` \`kiss\` \`pat\` \`poke\` \`slap\` \`tick\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・admin commands;\`disable-heistar\` \`enable-heistar\` \`say\` \`set-armsg\` \`set-prefix\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・developer commands;\`eval\` \`exec\` \`git\` \`refresh\`]

$reply

$addButton[1;;danger;closehelp_$authorID;no;<:org_crossmark2:966358688686288916>]

$addButton[1;﹒vote;5;https://top.gg/servers/840506530809643059/vote]

$addButton[1;﹒server;5;https://discord.gg/dworld]

$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]

$else

$$author[1;$userName[$clientID];$userAvatar[$clientID]]
$title[1;Commands list]
$description[1;Server Prefix: \`$getServerVar[prefix]\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・utility commands;\`avatar\` \`bans\` \`divider\` \`esnipe\` \`snipe\` \`whois\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・music commands;\`join\` \`leave\` \`nowplaying\` \`play\` \`pause\` \`resume\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・mod commands;\`ban\` \`lock\` \`unban\` \`unlock\` \`unviewlock\` \`viewlock\`]


$addField[1;<a:dwr_sparkle:961913682751803442>・info commands;\`help\` \`ping\` \`uptime\` \`serverinfo\` \`servericon\` \`stats\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・fun commands;\`enter\` \`exit\` \`fact\` \`ppsize\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・action commands;\`baka\` \`bite\` \`cuddle\` \`feed\` \`highfive\` \`hug\` \`kiss\` \`pat\` \`poke\` \`slap\` \`tickle\`]

$addField[1;<a:dwr_sparkle:961913682751803442>・admin commands;\`disable-heistar\` \`enable-heistar\` \`say\` \`set-armsg\` \`set-prefix\`]

$reply

$addButton[1;;danger;closehelp_$authorID;no;<:org_crossmark2:966358688686288916>]

$addButton[1;﹒vote;5;https://top.gg/servers/840506530809643059/vote]

$addButton[1;﹒server;5;https://discord.gg/dworld]

$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]

$endIf

$cooldown[10s;$getVar[star] You are on cooldown]

`
 },
{

    type: "interaction",
    prototype: "button",
code: `
$deleteMessage[$messageID]

$wait[3s]

$interactionUpdate[$getVar[star] Thanks for using me.]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==closehelp;]
`

}]