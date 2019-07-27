function coordToMap([xC, yC]){

}

function random(limit){
  return (Math.floor(Math.random() * limit))
}

var peep1 = {x: random(490), y: random(490), wid: 20, hei: 20}

var stage = document.getElementById('map'); // Get the canvas element by Id
var ctx = stage.getContext('2d'); // Canvas 2d rendering context

//Draw Rectangle function		
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(peep1.x, peep1.y, peep1.wid, peep1.hei); //This will draw a rectangle of 20x20
}

drawRect(peep1.x, peep1.y, peep1.wid, peep1.hei); //Drawing rectangle on initial load


function move(peep){
  //move rectangle randomly
  const moves = [[20, 0],[0, 20],[-20, 0],[0, -20]]

  var move = random(moves.length)

  console.log("move is: " + moves[move][0])

  ctx.clearRect(0,0, 500, 500);

  peep.x += moves[move][0];
  peep.y += moves[move][1];
  
  /*clearing anything drawn on canvas
   *comment this below do draw path */
  

  //Drawing rectangle at new position
  drawRect(peep.x,peep.y,peep.wid,peep.hei);
}