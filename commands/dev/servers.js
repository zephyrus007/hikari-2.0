module.exports = {
name: "guilds",
code: `
$createfile[$djsEval[$readfile[guilds.txt];yes];Guild [ $random[100;6003] ].txt]

$title[1;Guild list]

$description[1; \`\`\`js
$djsEval[$readfile[guilds.txt];yes]\`\`\`]

$footer[1;Requested by $usertag]
$addTimestamp[1]
$color[1;$getServerVar[ecolor]]

$onlyForIDs[$botOwnerID;{newEmbed:
{author:Command Restriction}
{description:This command can only be used by \`$userTag[$botOwnerID]\`}
{footer:$userTag}
{timestamp}
{color:$getVar[ecolor]}}
{delete:5s}]

`
}