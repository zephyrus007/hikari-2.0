module.exports = {
  name: "eval",
  code: `
$eval[$message;yes;yes;yes;yes]

$onlyForIDs[$botOwnerID;$getVar[cross] only \`$userTag[$botOwnerID]\` can use this. {delete:5s}]
`
}