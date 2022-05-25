module.exports = {
name: "bans",
usage: "[p]bans",
info: "Shows the server's banned users count.",
code: `

<a:org_loading2:978544553785196594> **Fetching banned users**

$editIn[4s;<a:org_loading2:978544553785196594> **Sorting out fetched data**;$getVar[tick] **This server has \`$banCount\` banned users.**]

$reply[$messageID;no]
`

}