function random(limit){
  return (Math.floor(Math.random() * limit))
}

var stage = document.getElementById('map'), // Get the canvas element by Id
        ctx = stage.getContext('2d'), // Canvas 2d rendering context
        x = random(490), //intial horizontal position of drawn rectangle
        y = random(490), //intial vertical position of drawn rectangle
        wid = 20, //width of the drawn rectangle
        hei = 20; //height of the drawn rectangle

//Draw Rectangle function		
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(x, y, wid, hei); //This will draw a rectangle of 20x20
}

drawRect(x,y,wid,hei); //Drawing rectangle on initial load


function move(numClicks){
  //move rectangle randomly
  const moves = [[20, 0],[0, 20],[-20, 0],[0, -20]]

  var move = random(moves.length)

  console.log("move is: " + moves[move][0])

  return moves[move]
}