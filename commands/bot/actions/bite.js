module.exports = ({
 name: "bite",
 code: `
$author[1;$usertag;$userAvatar]

$title[1;$username bites $username[$mentioned[1]]!]

$image[1;$jsonRequest[https://nekos.best/api/v1/bite; url;]]

$reply[$messageID;no]

$onlyIf[$message!=;$getVar[cross] please mention someone to bite. {delete:5s}]

$cooldown[5s;$getVar[cross] You are on cooldown. {delete:5s}]
`
})