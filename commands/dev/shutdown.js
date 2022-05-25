module.exports = {
name: "shutdown",
code: 
`
$djsEval[process.exit()]

$wait[3s]

Shutting down... :wave:

$reply[$messageID;no]

$onlyForIDs[$botOwnerID;{newEmbed:
{author:Command Restriction}
{description:This command can only be used by \`$userTag[$botOwnerID]\`}
{footer:$userTag}
{timestamp}
{color:$getVar[ecolor]}}]

`
}