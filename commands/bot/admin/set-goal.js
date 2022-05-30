module.exports = {
    name: "setgoal",
    aliases: "sg",
    code: `
$getVar[tick] Goal has been set to \`$message[1]\`

$setServerVar[goal_count;$message[1]]

$reply

$onlyIf[$membersCount<=$message[1];$getVar[cross] Goal is already achieved.]

$onlyIf[$isNumber[$message[1]]==true;$getVar[cross] Please enter a valid number.]

$onlyPerms[admin;$getVar[cross] You are missing \`ADMIN\` permission.]
      `
    } 
    
    