module.exports = {
name: "enable-heistar",
$if: "v4",
aliases: ["ehr", "enhr", "en-har", "en-ar"],
code: `
$if[$getServerVar[hsar]==on]

$getVar[cross] **heist trigger is already enabled.**

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]

$reply[$messageID;no]

$else

$getvar[tick] **enabled auto reply for \`heist\`.**
$setServerVar[hsar;on]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]

$reply[$messageID;no]

$endIf
`
}