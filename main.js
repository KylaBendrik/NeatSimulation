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

var stage = document.getElementById('map'); // Get the canvas element by Id
var ctx = stage.getContext('2d'); // Canvas 2d rendering context

function findSights(peep){
  //straight lines/rectangles extending up from all four sides. Returns array of rectangles.
  var sightN = {x: (peep.x), y: peep.y - peep.sight, wid: peep.wid, hei: peep.sight};
  
  var sightS = {x: (peep.x), y: peep.y + peep.hei, wid: peep.wid, hei: peep.sight};
  
  var sightE = {x: peep.x - peep.sight, y: peep.y, wid: peep.sight, hei: peep.hei};
  var sightW = {x: peep.x + peep.wid, y: peep.y, wid: peep.sight, hei: peep.hei}

  return [sightN, sightE, sightS, sightW];
}

//Draw Peep
function drawRect(peep) {
    ctx.fillStyle = '#ff0000'; // Fill color of rectangle drawn
    ctx.fillRect(peep.x, peep.y, peep.wid, peep.hei); //This will draw a rectangle of 20x20
}

function drawSights(peep) {
  var sights = findSights(peep);

  sights.forEach(function(sight){
    ctx.fillStyle = '#bababa'; // Fill color of rectangle drawn
    ctx.fillRect(sight.x, sight.y, sight.wid, sight.hei); //This will draw a rectangle of 20x20
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



