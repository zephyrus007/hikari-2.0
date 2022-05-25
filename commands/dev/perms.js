module.exports = {
  name: "permissions",
  aliases: "perms",
  code:
`
**Permissions supported in aoi.js**
\`\`\`js
createinvite
kick
ban
admin
managechannel
manageserver
addreactions
viewauditlog
priorityspeaker
stream
viewchannel
sendmessage
sendtts
managemessages
embedlinks
attachfiles
readmessagehistory
mentioneveryone
externalemojis
viewguildinsights
connect
speak
mutemembers
deafenmembers
movemembers
usevad
changenickname
managenicknames
manageroles
managewebhooks
manageemojisandstickers
useappcmds
requesttospeak
managethreads
usepublicthreads
useprivatethreads
createpublicthreads
createprivatethreads
externalstickers
sendmessageinthreads
startembeddedactivities
\`\`\`

$reply[$messageID;no]

$onlyForIDs[$botOwnerID;{newEmbed:
{author:Command Restriction}
{description:This command can only be used by \`$userTag[$botOwnerID]\`}
{footer:$userTag}
{timestamp}
{color:RED}}]
`
}