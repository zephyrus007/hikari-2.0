module.exports = [{
    name: "ping-flashgiveaway",
    aliases: ['ping-flashgaw'],
    $if : "v4",
    code: `$if[$message==]
<a:aura_star69:940897948596862986>  <@&841920158934761536> new giveaways! 
$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/841943069020782612/948214320037265479;no;]
  $else
<a:aura_star69:940897948596862986> <@&841920158934761536> new giveaways!
$title[1;message:]
$description[1; $message]
$footer[1;Requested by $userTag]
$addTimestamp[1]
$color[1;$getVar[embColor]]
$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/841943069020782612/948214320037265479;no;]
$endIf
$cooldown[30m;{newEmbed:
{title:$username, you can use this again in %time%}
{color:$getVar[embColor]}
}]
$onlyForChannels[914206004441395250;841710434813739068;843534604945850459;841930316460589116;841931319407804426;850666463760089088;**$username** you can't use this here.]
$onlyForRoles[841878434128461825;{newEmbed:
{title:$username, you need \`$roleName[841878434128461825]\` to use this.}
{color:$getVar[embColor]}
}]
$onlyForServers[840506530809643059;947704590877478962;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[embColor]}{url:https://discord.gg/dworld}}]
`
},
                  {
name: "ping-giveaway",
aliases: ['ping-gaw'],
$if : "v4",
code: `$if[$message==]
<@&842235119691366400> new giveaways!

$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/841943069020782612/948214320037265479;no;]

$else

<@&842235119691366400> new giveaways!

$title[1;message:]
$description[1;$message]

$footer[1;Requested by $userTag]
$addTimestamp[1]
$color[1;$getVar[embColor]]

$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/841943069020782612/948214320037265479;no;]
$endIf

$cooldown[30m;{newEmbed:
{title:$username, you can use this again in %time%}
{color:$getVar[embColor]}
}]
$onlyForChannels[914206004441395250;841710434813739068;843534604945850459;841930316460589116;841931319407804426;850666463760089088;**$username** you can't use this here.]
$onlyForRoles[841878434128461825;{newEmbed:
{title:$username, you need \`$roleName[841878434128461825]\` to use this.}
{color:$getVar[embColor]}
}]
$onlyForServers[840506530809643059;947704590877478962;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[embColor]}{url:https://discord.gg/dworld}}]
`
                  }