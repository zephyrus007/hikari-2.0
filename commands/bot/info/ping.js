module.exports = {
  name : "ping",
  code: `
$title[1;Pong!]
$description[1;**— websocket**
ʚ \`$pingms\`
**— database**
ʚ \`$dbpingms\`]
$color[1;$getvar[ecolor]]
$addTimestamp[1]
$reply[$messageID;no]
`
}