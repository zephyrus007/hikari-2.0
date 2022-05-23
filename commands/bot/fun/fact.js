module.exports = {
name: "fact",
code:
`
$title[1;Random Fact]
$description[1;$jsonRequest[https://api.popcat.xyz/fact;fact]
$footer[1;Requested by $usertag]
$addTimestamp[1]
$color[1;$getVar[ecolor]]

`
  
}