module.exports = [{
name: "reset-welcome",
  code:

    `
$getVar[tick] Welcome channel removed.

$reply

$setservervar[welcome_channel;]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission. {delete:5s}]
`
  
}]