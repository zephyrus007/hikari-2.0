module.exports = {
    name: "set-armsg",
    aliases: ["sam", "set-heistar-msg", "set-heist-ar-msg", "sarm"],
    code: `
$getVar[tick] Set heist auto reply message to \`$message\`

$reply

$setServerVar[heistmsg;$message]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]
    `
    }