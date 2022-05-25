module.exports = {
  name: "heistar",
  aliases: ["h", "har"],
  code: `

$editMessage[$get[msg];{
"content" : "Heist trigger — Configure auto reply",
"components" : "{actionRow:{button:﹒enable:success:henable_$authorID:true:}{button:﹒disable:danger:hdisable_$authorID:true:}}"
}]

$wait[10s]

$let[msg;$sendMessage[{
"content" : "Heist trigger — Configure auto reply.",
"components" : "{actionRow:{button:﹒enable:success:henable_$authorID:false:}{button:﹒disable:danger:hdisable_$authorID:false:}}"
};yes]]
`
}