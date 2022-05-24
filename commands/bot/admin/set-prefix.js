module.exports = {
    name: "set-prefix",
    usage: "[p]set-prefix <new_prefix>",
    info: "Set a custom prefix for your server.",
    code: `
$setServerVar[prefix;$message]

$getVar[tick] **Prefix changed from **\`$getServerVar[prefix]\` **to** \`$message\`

$onlyIf[$charCount[$message]=<5;$getVar[cross] Prefix has to be 5 or less charactars long.]

$onlyIf[$charcount[$message]>=1;$getVar[cross] Prefix can't be empty.]

$onlyPerms[manageserver;$getVar[cross] You are missing \`MANAGE_SERVER\` permission.]

$reply[$messageID;no]

    `
}