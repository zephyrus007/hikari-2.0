module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `

$if[$hasRoles[$guildID;$authorID;$getVar[staff_role]]==true]

$else

$deleteIn[10s]

$getservervar[heistmsg]

$reply[$messageID;yes]

$endIf

$onlyIf[$checkContains[$toLowerCase[$message];heist]==true;]

$onlyIf[$getServerVar[hsar]==on;]

$onlyForChannels[841350863833661470;]

$onlyForServers[840506530809643059;]
`
} 