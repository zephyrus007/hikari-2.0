module.exports = ({
 name: "feed",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username feeds $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/feed; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to feed. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})