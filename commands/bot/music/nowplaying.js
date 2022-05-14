module.exports = [{

name: "nowplaying",
aliases: "np",
code: `

$title[1;Now Playing - ]
$description[1;$songInfo[title]]
$addTimestamp[1]
$color[1;$getVar[ecolor]]

`

}] // 