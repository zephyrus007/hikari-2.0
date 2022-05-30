module.exports = [{
name: "set-welcome",
  code:

    `
$getVar[tick] Set welcome channel to:
> <#$mentionedChannels[1]>

$reply

$setservervar[welcome_channel;$mentionedchannels[1]]

$onlyIf[$message!=;$getVar[cross] You forgot to mention a channel.]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission. {delete:5s}]
`
  
}]