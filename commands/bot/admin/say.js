module.exports = {
name: "say",
code:
`

$addCmdReactions[<:org_checkmark:966229530106810388>]

$channelSendMessage[$get[id];$message[2]]

$let[id;$findChannel[$message[1];yes]]

$onlyIf[$message[2]!=;$getVar[star] Provide a message. {delete:5s}]

$onlyIf[$message[1]!=;$getVar[star] Provide a channel. {delete:5s}]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission. {delete:5s}]
`
  
}