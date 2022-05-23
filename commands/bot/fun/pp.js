module.exports = [{
name: "pp",
aliases: ["penis", "ppsize", "mygflikesthis"],
$if: "v4",
code: `

$if[$authorID==$botOwnerID]

$title[1;$username[$authorID]'s pp size]

$description[1;8==================================================D]

$color[1;$getVar[ecolor]]
$footer[1;$randomText[Size matters?;Bigger always better?]]
$addTimestamp[1;$dateStamp]

$endIf

$if[$message==]

$title[1;Penis size machine]

$description[1;
**$username's  pp size**

$randomText[pp is so small it isn't visible by a naked eye;8D;8=D;8==D;8===D;8====D;8=====D;8======D;8=======D;8========D;8=========D;8=============================D;8==============================D;That user doesn't have a pp;Bro that guy pp is like 0.69cm, how can i take measurements]]

$color[1;$getVar[ecolor]]
$footer[1;$randomText[Size matters?;Bigger always better?;There's a saying that small is better]]
$addTimestamp[1;$dateStamp]

$else

$title[1;Penis size machine]

$description[1;
**$message's pp size**

$randomText[pp is so small it isn't visible by a naked eye;8D;8=D;8==D;8===D;8====D;8=====D;8======D;8=======D;8========D;8=========D;8=============================D;8==============================D;That user doesn't have a pp;Bro that guy's pp is like 0.69cm, how can i take measurements]]

$color[1;$getVar[ecolor]]
$footer[1;$randomText[Size matters?;Bigger always better?]]
$addTimestamp[1;$dateStamp]

$endIf

$cooldown[5s;$getVar[cross] you can use this in 5 seconds. {delete:5s}]


`  
}]