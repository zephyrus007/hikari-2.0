module.exports = ({
 name: "slap",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username slaps $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/slap; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to slap. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})