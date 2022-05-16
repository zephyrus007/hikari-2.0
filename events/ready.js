module.exports = (bot) => {
	bot.readyCommand({
		channel: "", 
		code: `
		$log[[STATUS] $userTag[$clientID] is online]
		`
	})
}