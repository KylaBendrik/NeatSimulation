//setup

const mapSize = 100
var peep1 = {x: random(mapSize - 20), y: random(mapSize - 20), wid: 20, hei: 20, score: 0, sight: 30};

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
  return {x: newX, y: newY, wid: circle.quality * 2, hei: circle.quality * 2}
}

function intersects(rect1, rect2){
  return !  (rect2.x                 > (rect1.x + rect1.wid) ||
            (rect2.x + rect2.wid)  < rect1.x                 ||
            rect2.y                 > (rect1.y + rect1.hei)  ||
            (rect2.y  +   rect2.hei)  < rect1.y);
}

function intersectLineBox(line, rect){
  
}

var stage = document.getElementById('map'); // Get the canvas element by Id
var ctx = stage.getContext('2d'); // Canvas 2d rendering context

function findSights(box){
  //straight lines/rectangles extending up from all four sides. Returns array of rectangles.
  var boxSights = [
    {x1:box.x + (box.wid/2), y1:box.y, 
      x2: box.x + (box.wid/2), y2: box.y - box.sight},
    {x1:box.x + (box.wid), y1:box.y + (box.hei/2), 
        x2: box.x + (box.wid + box.sight), y2:box.y + (box.hei/2)},
    {x1:box.x + (box.wid/2), y1:box.y+box.hei, 
      x2: box.x + (box.wid/2), y2: box.y + (box.sight + box.hei)},
    {x1:box.x, y1:box.y + (box.hei/2), 
      x2: box.x - (box.sight), y2: box.y + (box.hei/2)},
    ]

  return boxSights;
}

//Draw Peep
function drawRect(peep) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(peep.x, peep.y, peep.wid, peep.hei); //This will draw a rectangle of 20x20
}

function drawSights(peep) {
  var sights = findSights(peep);

  sights.forEach(function(sight){
    ctx.beginPath();
	  ctx.moveTo(sight.x1, sight.y1);
	  ctx.lineTo(sight.x2, sight.y2);
	  ctx.stroke();
  })
}

//draw nom
function drawNom(nom){
  ctx.beginPath();
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
  
  drawRect(peep1);
  drawSights(peep1)
}

//initialize map
drawMap()



