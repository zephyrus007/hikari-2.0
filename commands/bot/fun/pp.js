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

$title[1;$username[$authorID]'s pp size]

$description[1;$randomText[pp is so small it isn't visible by a naked eye;8D;8=D;8==D;8===D;8====D;8=====D;8======D;8=======D;8========D;8=========D;8==========D;8===========D;8============D;8====================D;8=====================D;8======================D;8=======================D;8========================D;8=========================D;8==========================D;8===========================D;8============================D;8=============================D;8==============================D]

$color[1;$getVar[ecolor]]
$footer[1;$randomText[Size matters?;Bigger always better?]]
$addTimestamp[1;$dateStamp]

$else

$title[1;$message's pp size]

$description[1;$randomText[pp is so small it isn't visible by a naked eye;8D;8=D;8==D;8===D;8====D;8=====D;8======D;8=======D;8========D;8=========D;8==========D;8===========D;8============D;8====================D;8=====================D;8======================D;8=======================D;8========================D;8=========================D;8==========================D;8===========================D;8============================D;8=============================D;8==============================D]

$color[1;$getVar[ecolor]]
$footer[1;$randomText[Size matters?;Bigger always better?]]
$addTimestamp[1;$dateStamp]

$endIf

$cooldown[5s;$getVar[cross] you can use this in 5 seconds. {delete:5s}]


`  
}]