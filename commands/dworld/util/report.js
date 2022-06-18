module.exports = {
name: "report",
code:
`

$ChannelSendMessage[987633321142001714;<@&841521394130747482>
{newEmbed:{title:— Server Report}
{description:>>> $message}
{field:User:$userTag - \`$authorID\`}
{field:Channel:<#$channelID> - \`$channelID\`}
{timestamp}
{footer:ID#COLON# $authorID}
{color:$getVar[ecolor]}
}]

$getVar[tick] Report has been send to the admins, you will get a reply from one of our server bot when they deal with it. Thanks for reporting!

$reply

$cooldown[20s;$username, you are on cooldown!{delete:10s}]

$onlyIf[$message!=;<a:dwr_star:959068679205691512> What you wanna report?]

 ` 
}

/*
$cooldown[10s;<a:dwr_star:959068679205691512> You are on cooldown.]
*/