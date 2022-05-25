module.exports = ({
 name: "poke",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username pokes $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/poke; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to poke. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})