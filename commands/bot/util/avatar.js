module.exports = {
  name: "avatar",
  aliases: "av",
  usage: "[p]avatar <user>",
  info: "Shows the mentioned user's or your avatar.",
  code:
`
$title[1;Avatar for $usertag[$findUser[$message]]]
$color[1;$getVar[ecolor]] 
$image[1;$userAvatar[$findUser[$message]]]
$footer[1;Requested by $usertag]
`
}