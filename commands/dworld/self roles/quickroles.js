module.exports = [{
	name: "btr",
	aliases: ["pingroles", "ph"],
	code: `
	$deleteCommand
$title[1;𓂃 ៸៸ quick roles *!*]
$description[1;<:yellow_1:960783704660246558> - <@&979057332027793448>
<:yellow_2:960783765775474688> - <@&979057048077623366>
<:yellow_3:960783770368245811> - <@&843500195795042334>
<:yellow_4:960783775594336256> - <@&848979199184339015>
<:yellow_5:960783779440525312> - <@&843509896149729281>]
$footer[1;get roles <3]
$addTimestamp[1;$dateStamp]
$color[1;$getVar[ecolor]]
$addButton[1;;secondary;role_5;no;<:yellow_5:960783779440525312>]
$addButton[1;;secondary;role_4;no;<:yellow_4:960783775594336256>]
$addButton[1;;secondary;role_3;no;<:yellow_3:960783770368245811>]
$addButton[1;;secondary;role_2;no;<:yellow_2:960783765775474688>]
$addButton[1;;secondary;role_1;no;<:yellow_1:960783704660246558>]


$onlyPerms[admin;]
`
}, {
	name: "role_1",
	type: 'interaction',
	$if: 'v4',
	prototype: 'button',
	code: `
$if[$hasRoles[$guildid;$authorId;979057332027793448]==true]

$takeRole[$guildID;$authorID;979057332027793448]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully removed <@&979057332027793448> from you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$else

$giveRole[$guildID;$authorID;979057332027793448]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully added <@&979057332027793448> to you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]


$endif 


`
}, {
	name: "role_2",
	type: 'interaction',
	$if: 'v4',
	prototype: 'button',
	code: `
$if[$hasRoles[$guildid;$authorId;979057048077623366]==true]
$takeRole[$guildID;$authorID;979057048077623366]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully removed <@&979057048077623366> from you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$else

$giveRole[$guildID;$authorID;979057048077623366]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully added <@&979057048077623366> to you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$endif 


`
}, {
	name: "role_3",
	type: 'interaction',
	$if: 'v4',
	prototype: 'button',
	code: `
$if[$hasRoles[$guildid;$authorId;843500195795042334]==true]
$takeRole[$guildID;$authorID;843500195795042334]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully removed <@&843500195795042334> from you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$else

$giveRole[$guildID;$authorID;843500195795042334]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully added <@&843500195795042334> to you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$endif 


`
}, {
	name: "role_4",
	type: 'interaction',
	$if: 'v4',
	prototype: 'button',
	code: `
$if[$hasRoles[$guildid;$authorId;848979199184339015]==true]
$takeRole[$guildID;$authorID;848979199184339015]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully removed <@&848979199184339015> from you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$else

$giveRole[$guildID;$authorID;848979199184339015]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully added <@&848979199184339015> to you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$endif 


`
}, {
	name: "role_5",
	type: 'interaction',
	$if: 'v4',
	prototype: 'button',
	code: `
$if[$hasRoles[$guildid;$authorId;843509896149729281]==true]
$takeRole[$guildID;$authorID;843509896149729281]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully removed <@&843509896149729281> from you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$else

$giveRole[$guildID;$authorID;843509896149729281]

$interactionReply[;{newEmbed:{title:Success!}{description:Successfully added <@&843509896149729281> to you.}{color:2f3136}{timestamp:ms}{footer:$userTag}};;;;yes]

$endif 


`
}]