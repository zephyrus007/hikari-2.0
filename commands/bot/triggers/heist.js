module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `

$if[$hasRoles[$guildID;$authorID;$getVar[staff_role]]==true]

$elseif[$hasRoles[$guildID;$authorID;841682859604967464==true]

The heist will be in <#841919418053558313>

$reply[$messageID;yes]

$endelseIf

$else

$deleteIn[10s]

$getservervar[heistmsg]

$reply[$messageID;yes]

$endIf


$onlyIf[$checkContains[$toLowerCase[$message];heist]==true;]

$onlyIf[$getServerVar[hsar]==on;]

$onlyForChannels[843534604945850459;]

$onlyForServers[840506530809643059;]
`
} 