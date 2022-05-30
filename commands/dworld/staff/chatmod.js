module.exports = [{
    name: "revive",
    code:

`
$deleteCommand

— <@&848979199184339015> <a:dwr_sparkle:961913682751803442>

$title[1;⨯・chat revival ───]

$description[1;>>> \`-\` **revived by**・<@$authorID>
\`-\` **message**・$message]

$addField[1;⨯・random topic ───;>>> $randomText[What is your favorite piece of art?;Who is your favorite artist?;Have you visited any art galleries recently?;What could never be considered art?;Which art movement is your favorite?;What art form is your favorite?;What does it mean to be human?; What was the last funny video you saw?;What do you do to get rid of stress?;What is something you are obsessed with?;If you opened a business, what kind of business would it be?;Who is your favorite entertainer?;Are you a very organized person?;What is the strangest dream you have ever had?;Who in your life brings you the most joy?;What do you bring with you everywhere you go?;If you had to change your name, what would your new name be?;How should success be measured?;Who is the most successful person you know?;If you could learn the answer to one question about your future, what would the question be?;Who is someone popular now that you really like? Why do you like them so much?;What smell brings back great memories?;What are you best at?;Who is the funniest person you’ve met?;What weird or useless talent do you have?;What’s the funniest TV series you have seen?;What is the most overrated movie?;What’s your favorite genre of movie?;What movie scene choked you up the most?;What’s the worst movie you have seen recently?;When was the last time you went to a movie theater?;What was the last movie you watched? How was it?;Do you prefer fiction or nonfiction books?;What book has influenced you the most?;How fast do you read?;How often do you go to the library?;What book has had the biggest effect on the modern world?;What was the worst book you had to read for school? How about the best book you had to read for school?;Do you think people read more or fewer books now than 50 years ago?;Now that indie publishing has become easier, have books gotten better or worse?;What song always puts you in a good mood?;What’s the best way to discover new music?;What was the last song you listened?]]

$image[1;https://media.discordapp.net/attachments/976047400210804747/978911011706896394/unknown.png?width=994&height=24]
$color[1;$getVar[ecolor]]
$thumbNail[1;$serverIcon]

$cooldown[5h;$getVar[cross] You are on cooldown.{delete:5s}]

$onlyIf[$message!=;$getVar[star] Please provide a message.{delete:5s}]

$onlyForChannels[841350863833661470;976047400210804747;843534604945850459;$getVar[cross] You can't use this here. {delete:5s}]

$channelSendMessage[978939435544621126;{newEmbed:{title:Command Logs}
{author:$usertag:$userAvatar}
{description:\`$getServerVar[prefix]$commandName\` has been used.}
{field:User:<@$authorID>}
{field:User ID:$authorID}
{field:Content:$message}
{field:Content ID:$messageID}
{field:Channel:<#$channelID>}
{field:Channel ID:$channelID}
{thumbnail:$serverIcon}
{footer:Hikari Logs:https#COLON#//cdn.discordapp.com/emojis/979081737403506778.webp}
{timestamp}
{color:$getVar[ecolor]}
}]

$onlyForRoles[978734681505804359;908592482940506132;894149947274977345;$getVar[cross] you will require any of these role:
> \`$roleName[978734681505804359]\`
> \`$roleName[908592482940506132]\`
> \`$roleName[894149947274977345]\`
Please refrain spamming this command. {delete:5s}]

`

}]