module.exports = {
  name: "git",
  code: `
\`\`\`js
$exec[git $message]
\`\`\`

$onlyForIDs[$botOwnerID;
	{
		"content":"Non."
	}
]
`
}