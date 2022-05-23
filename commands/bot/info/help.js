module.exports =
  {
    name: "help",
    $if: "v4",
    code: `
$if[$authorID==$botOwnerID]

$author[1;$userName[$clientID];$userAvatar[$clientID]]
$title[1;Commands list]
$description[1;Server Prefix: \`$getServerVar[prefix]\`]

$addField[1;・utility commands;\`avatar\` \`divider\`]

$addField[1;・music commands;\`join\` \`leave\` \`nowplaying\` \`play\` \`pause\` \`resume\`]

$addField[1;・mod commands;\`lock\` \`unlock\` \`unviewlock\` \`viewlock\`]

$addField[1;・fun commands;\`enter\` \`exit\` \`ppsize\`]

$addField[1;・info commands;\`help\` \`ping\` \`uptime\` \`stats\`]

$addField[1;・developer commands;\`eval\` \`exec\` \`git\` \`refresh\`]

$addField[1;・admin commands;\`disable-heistar\` \`enable-heistar\` \`set-armsg\`]

$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]

$else

$author[1;$userName[$clientID];$userAvatar[$clientID]]
$title[1;Commands list]
$description[1;Server Prefix: \`$getServerVar[prefix]\`]

$addField[1;・utility commands;\`avatar\` \`divider\`]

$addField[1;・music commands;\`join\` \`leave\` \`nowplaying\` \`play\` \`pause\` \`resume\`]

$addField[1;・mod commands;\`lock\` \`unlock\` \`unviewlock\` \`viewlock\`]

$addField[1;・fun commands;\`enter\` \`exit\` \`ppsize\`]

$addField[1;・info commands;\`help\` \`ping\` \`uptime\` \`stats\`]

$addField[1;・admin commands;\`disable-heistar\` \`enable-heistar\` \`set-armsg\`]

$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]

$endIf

`
  }