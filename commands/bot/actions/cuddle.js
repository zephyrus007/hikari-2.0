module.exports = ({
 name: "cuddle",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username cuddles $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/cuddle; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to cuddle. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})