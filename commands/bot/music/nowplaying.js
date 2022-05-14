module.exports = [{

name: "nowplaying",
aliases: "np",
code: `

$title[1;Now Playing]

$thumbnail[1;$songInfo[thumbnail]]

$description[1;
**Playing:**
\`$songInfo\`

**Song By:**
\`$songInfo[author]\`

**Duration:**
\`$humanizeMS[$songInfo[duration]]\`

$color[1;$getVar[ecolor]]


$onlyif[$queueLength!=0;Nothing is playing now in this server.]



`

}]