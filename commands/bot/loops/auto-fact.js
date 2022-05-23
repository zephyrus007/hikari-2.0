/*
module.exports = [{
code: `

$title[1;Random Fact]
$description[1;$jsonRequest[https://api.popcat.xyz/fact;fact]
$addTimestamp[1]
$color[1;$getVar[ecolor]]

$useChannel[$getServerVar[autofact_channel]]

  `,
  channel: "$getServerVar[autofact_channel]",
  executeOnStartup: true,
  every: 300000,
  type: 'loop'
  
}] 
*/