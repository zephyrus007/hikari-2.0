module.exports = {
  name: "userinfo",
  $if: "v4",
  aliases: ["whois", "whotfis"],
  code: `
  $author[1;$userTag[$findUser[$message]];$userAvatar[$findUser[$message]]]

$description[1;<@!$findUser[$message;yes]>]
  $addField[1;Permissions;$if[$hasPerms[$guildID;$findUser[$message;yes];admin]==true]
  Server admin
  $else
  $userPerms[$findUser[$message;yes];, ]
  $endif;no] 

  
$addField[1;Joined Discord; \`$splitText[1]\`;yes]
$textSplit[$creationDate[$findUser[$message;yes]];,]

$addField[1;Dm Status;$replaceText[$replaceText[$isUserDMEnabled[$findUser[$message;yes]];true; \`Open\`;1];false; \`Closed\`;1];yes]

$addField[1;User ID; \`$findUser[$message;yes]\`;yes]

$addField[1;Discord Tag;\`#$discriminator[$findUser[$message;yes]]\`;yes]
  $addField[1;Nickname;$if[$nickname[$findUser[$message;yes]]!=]
  \`$nickname[$findUser[$message;yes]]\` 
  $else  
  \`None\`
  $endif;yes]

$addField[1;Username; \`$username[$findUser[$message;yes]]\`;yes]

$color[1;$getVar[ecolor]]
$footer[1;Requested by $userTag]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$addTimestamp[1]
`
}
