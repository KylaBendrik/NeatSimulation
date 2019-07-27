//setup

const mapSize = 50
var peep1 = {x: random(mapSize - 10), y: random(mapSize - 10), wid: 20, hei: 20, score: 0}

function random(limit){
  return (Math.floor(Math.random() * limit))
}


var stage = document.getElementById('map'); // Get the canvas element by Id
var ctx = stage.getContext('2d'); // Canvas 2d rendering context

//Draw Peep
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(peep1.x, peep1.y, peep1.wid, peep1.hei); //This will draw a rectangle of 20x20
}

drawRect(peep1.x, peep1.y, peep1.wid, peep1.hei); //Drawing rectangle on initial load


