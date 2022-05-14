module.exports = {
name: "disable-heistar",
$if: "v4",
aliases: ["dhr", "dihar", "di-ar"],
code: `
$if[$getServerVar[hsar]==off]

$getVar[cross] **heist trigger is already disabled.**
$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]
$reply[$messageID;no]

$else

$getvar[tick] **disabled auto reply for \`heist\`.**
$setServerVar[hsar;off]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]

$reply[$messageID;no]

$endIf
`
}