module.exports = ({
 name: "kiss",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username kisss $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/kiss; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to kiss. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})