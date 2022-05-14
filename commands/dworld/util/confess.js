module.exports = {
name: "confess",
code:
`

$SendDm[<a:dwr_star:959068679205691512> your confession has been sent to <#954845518922657792>.
;$authorID]

$ChannelSendMessage[961213123363229716;
{newEmbed:{title:Confession Logs}
{description:confession made by $userTag[$authorID] - \`$authorID\`}
{field:Content#COLON#:>>> $message}
{timestamp}
{footer:ID#COLON# $authorID:$userAvatar}
{color:$getVar[ecolor]}
}]

$ChannelSendMessage[954845518922657792;
{newEmbed:{title:— anonymous confession}
{description:>>> $message}
{timestamp}
{footer:.gg/dworld - confess}
{color:$getVar[ecolor]}
}]

$onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;<a:dwr_star:959068679205691512> Links are not allowed.]

$onlyIf[$message!=;<a:dwr_star:959068679205691512> What you wanna confess?]

$onlyIf[$guildID==;<a:dwr_star:959068679205691512> Command only available in dms.]
 ` 
}

/*
$cooldown[10s;<a:dwr_star:959068679205691512> You are on cooldown.]
*/