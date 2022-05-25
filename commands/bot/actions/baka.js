module.exports = ({
 name: "baka",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username insults $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/baka; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to insult. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})