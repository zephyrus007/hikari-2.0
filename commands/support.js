module.exports = {
  name: "support",
  aliases: ['spc', 'support-info'],
  code: `
$title[1;・Support Guidelines]
$description[1;<a:dwr_star:959068679205691512> please wait patiently, don't ping anyone.
<a:dwr_star:959068679205691512> provide ss and user IDs if required.
<a:dwr_star:959068679205691512> mini-modding here is not allowed.
<a:dwr_star:959068679205691512> this channel is only for server related issues
<a:dwr_star:959068679205691512> no off-topic other than support related.
<a:dwr_star:959068679205691512> to request support type: \`a!helpme\`
]
$deleteCommand
$color[1;$getVar[ecolor]]
$addTimestamp[1]
$footer[1;Requested by $userTag]
$image[1;https://media.discordapp.net/attachments/958433734795874394/958440580445265971/Open_16.png]

$onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}{url:https://discord.gg/dworld}}]
`
}