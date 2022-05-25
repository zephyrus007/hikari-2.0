module.exports = [{
name: "timer",
code:
`
$setTimeout[timer;$message[1];{
"timerID": "$get[msg]"
}]

$let[msg;$sendMessage[<t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>;yes]]


$onlyPerms[admin;$getVar[cross] You are missing \`ADMIN\` permission.]
`
  
},
                  {
name: "timer",
type: "timeout",
code:`

$editMessage[$timeoutData[timerID];Timer ended.]
`
                    
                  }]