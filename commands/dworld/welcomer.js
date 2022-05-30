module.exports = [{
type: "join",
code: `

$editMessage[$get[msg];{
"content" : "<@$authorID>",
"embeds" : "{newEmbed:{title:Welcome To The Server <33}{author:$userTag:$userAvatar}{description:⨯﹕\`🌻\`꒱・Rules —  ﹒<#841691543522115645> 
⨯﹕\`✨\`꒱・Roles —  ﹒<#976396325790842880> 
⨯﹕\`💛\`꒱・Perks —  ﹒<#974560781632946217>}{footer:$get[oldc]th member}{thumbnail:$userAvatar}{timestamp}{color:$getVar[ecolor]}}",
"components" : "{actionRow:{button:﹒welcome:2:dwelcome:true:<:bunny_love:962942580499300372>}}"
}]

$wait[10s]

$let[oldc;$membersCount]

$let[msg;$sendMessage[{
"content" : "<@$authorID>",
"embeds" : "{newEmbed:{title:Welcome To The Server <33}{author:$userTag:$userAvatar}{description:⨯﹕\`🌻\`꒱・Rules —  ﹒<#841691543522115645> 
⨯﹕\`✨\`꒱・Roles —  ﹒<#976396325790842880> 
⨯﹕\`💛\`꒱・Perks —  ﹒<#974560781632946217>}{footer:$membersCountth member}{thumbnail:$userAvatar}{timestamp}{color:$getVar[ecolor]}}",
"components" : "{actionRow:{button:﹒welcome:2:welcome_$authorID:false:<:bunny_love:962942580499300372>}}"
};yes]]

$useChannel[$getServerVar[welcome_channel]]

`
},
                  {
type: "interaction",
prototype: "button",                   
code:`


$interactionReply[<a:dwr_star:959068679205691512> **$interactionData[author.tag]** has welcomed **$userTag[$get[id]]**;]

$let[msg;$interactionData[message.id]]

$onlyForRoles[894149947274977345;908379849352175653;]

$onlyif[$get[customId]==welcome;]

$let[id;$advancedTextSplit[$interactionData[customId];_;2]]
$let[customId;$advancedTextSplit[$interactionData[customId];_;1]]

`                    
              
}]
