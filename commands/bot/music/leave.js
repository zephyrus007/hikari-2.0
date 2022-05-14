module.exports = [{

name: "leave",

  aliases: ["dc", "disconnect", "stop"],

 code: ` Left <#$voiceID[$authorID]>.

$leaveVC


$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in my VC.]

$onlyIf[$voiceID[$authorID]!=;Please join my voice channel.]


$onlyIf[$voiceID[$clientID]!=;I'm already disconnected.]



`

}]