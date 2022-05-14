
module.exports = {
 name: "stats",
 code: `
$author[1;$userTag[$clientID];$userAvatar[$clientID]]

$title[1;Bot Statistics]

$addField[1;Uptime;$uptime]
$addField[1;Latency; $ping ms]
$addField[1;Commands;$commandsCount]
$addField[1;Users;$allMembersCount]
$addField[1;Servers;$serverCount]
$addField[1;Version;0.0.4]
$addField[1;Created;$creationDate[$clientID]]
$addField[1;Developer;$userTag[$botOwnerID]]

$addTimestamp[1]
$footer[1;Requested by $userTag]
$color[1;$getServerVar[ecolor]]

$reply[$messageID;no]


 `
} 
