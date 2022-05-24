module.exports = [{
name: "test",
code: `

$editMessage[$get[msg];{
"content" : "<@$authorID>",
"embeds" : "{newEmbed:{title:Welcome To The Server <33}{author:$userTag:$userAvatar}{description:⨯﹕\`🌻\`꒱・Rules —  ﹒<#841691543522115645> 
⨯﹕\`✨\`꒱・Roles —  ﹒<#976396325790842880> 
⨯﹕\`💛\`꒱・Perks —  ﹒<#974560781632946217>}{footer:$membersCountth member}{thumbnail:$userAvatar}{timestamp}{color:$getVar[ecolor]}}",
"components" : "{actionRow:{button:﹒welcome:2:dwelcome:true:<:bunny_love:962942580499300372>}}"
}]

$wait[10s]

$awaitComponents[$get[msg];everyone;hello;confvip;;1]

$let[msg;$sendMessage[{
"content" : "<@$authorID>",
"embeds" : "{newEmbed:{title:Welcome To The Server <33}{author:$userTag:$userAvatar}{description:⨯﹕\`🌻\`꒱・Rules —  ﹒<#841691543522115645> 
⨯﹕\`✨\`꒱・Roles —  ﹒<#976396325790842880> 
⨯﹕\`💛\`꒱・Perks —  ﹒<#974560781632946217>}{footer:$membersCountth member}{thumbnail:$userAvatar}{timestamp}{color:$getVar[ecolor]}}",
"components" : "{actionRow:{button:﹒welcome:2:welcome_$authorID:false:<:bunny_love:962942580499300372>}}"
};yes]]

$onlyForIDs[931956193939849337;$botOwnerID;Its not for you daddy {delete:10s}]

`
},
                  {
type: "interaction",
prototype: "button",                   
code:`


$interactionReply[**$interactionData[author.tag]** has welcomed **$userTag[$get[id]]**;]

$let[imsg;$interactionData[message.id]]

$onlyif[$get[customId]==welcome;]

$let[id;$advancedTextSplit[$interactionData[customId];_;2]]
$let[customId;$advancedTextSplit[$interactionData[customId];_;1]]


`                    
              
}]
