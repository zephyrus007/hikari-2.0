module.exports = [{
code: `

$title[1;$jsonRequest[https://meme-api.herokuapp.com/gimme;title];$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink]]

$image[1;$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]

$color[1;$getVar[ecolor]]
$addTimestamp[1]

  `,
  channel: "841946677513551892",
  executeOnStartup: true,
  every: 300000,  //Change this to the time you wish. 1 second= 1000.
  type: 'loop'
  
}] 