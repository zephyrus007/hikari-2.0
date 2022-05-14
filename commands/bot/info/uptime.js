module.exports = {
  name : "uptime",
  code: `
Been up for: **$uptime ( <t:$truncate[$divide[$readyTimeStamp;1000]]:F> )**
$reply[$messageID;no]


`
}