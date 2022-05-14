module.exports = {

name: "pause",

code: `

$addCmdReactions[<:org_checkmark:966229530106810388>]

$wait[1s]

$pauseTrack


$onlyif[$djseval[client.voiceManager.manager.players.get(guild.id).options.paused;yes]==false; You can't pause an already paused player.]



$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in my VC.]



$onlyIf[$voiceID[$authorID]!=;Please join my voice channel.]



$onlyIf[$voiceID[$clientID]!=; I'm disconnected.]



$onlyif[$queueLength!=0; Nothing is playing now in this server.]



`

    }