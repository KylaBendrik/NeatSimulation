//setup

const mapSize = 100
var peep1 = {x: random(mapSize - 20), y: random(mapSize - 20), size: 20, score: 0};

var noms = [
  {x: random(mapSize - 20), y: random(mapSize - 20), quality: random(19) + 1},
  {x: random(mapSize - 20), y: random(mapSize - 20), quality: random(19) + 1}
];

function random(limit){
  return (Math.floor(Math.random() * limit))
}

function boundBox(circle){
  //input x, y, size
  var newX = circle.x - circle.quality;
  var newY = circle.y - circle.quality;

  //output rectangle
  return {x: newX, y: newY, size: circle.quality * 2}
}

function intersects(rect1, rect2){
  return !  (rect2.x                 > (rect1.x + rect1.size) ||
            (rect2.x + rect2.size)  < rect1.x                 ||
            rect2.y                 > (rect1.y + rect1.size)  ||
            (rect2.y  +   rect2.size)  < rect1.y);
}

var stage = document.getElementById('map'); // Get the canvas element by Id
var ctx = stage.getContext('2d'); // Canvas 2d rendering context

//Draw Peep
function drawRect(peep) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(peep.x, peep.y, peep.size, peep.size); //This will draw a rectangle of 20x20
}

//draw nom
function drawNom(nom){
  ctx.arc(nom.x, nom.y, nom.quality, 0, 2 * Math.PI);
  ctx.fillStyle = '#7fa678';
  ctx.fill();
}

//reDraw Map
function drawMap(){
  
  ctx.clearRect(0,0, mapSize, mapSize);
  
  noms.forEach(function(nom) {
    drawNom(nom)
  })
  
  drawRect(peep1); //Drawing rectangle on initial load
}

//initialize map




