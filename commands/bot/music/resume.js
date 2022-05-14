module.exports = {

name: "resume",

code: `

$addCmdReactions[<:org_checkmark:966229530106810388>]

$wait[1s]

$resumeTrack

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are not in my VC.]

$onlyif[$djseval[client.voiceManager.manager.players.get(guild.id).options.paused;yes]==true; You can't resume a already running player.]

$onlyIf[$voiceID[$authorID]!=; Please join my VC.]



$onlyIf[$voiceID[$clientID]!=;\ I'm disconnected.]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]



`

    }