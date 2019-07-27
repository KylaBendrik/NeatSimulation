var pause = true;

var click = 0;

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

function plusClick() {
  click += 1;
  document.getElementById("click").innerHTML = click
}

//move rectangle inside the canvas using arrow keys
window.onkeydown = function(event) {
    var keyPr = event.keyCode; //Key code of key pressed

  
    if (keyPr === 32){
      var t = undefined;
      if (pause === true){
        pause === false
        clearInterval(t);
      } else{
        pause === true;
        t = setInterval(clickMove, 1000)
      }

    }


		 console.log(keyPr);
  	/*clearing anything drawn on canvas
     *comment this below do draw path */
    ctx.clearRect(0,0, 500, 500);
  
  	//Drawing rectangle at new position
    drawRect(x,y,wid,hei);
};

function move(numClicks){
  //move rectangle randomly
  const moves = [[20, 0],[0, 20],[-20, 0],[0, -20]]

  var move = random(moves.length)

  console.log("move is: " + moves[move][0])

  return moves[move]
}



function clickMove(){
  x += move(1)[0];
  y += move(1)[1];

  plusClick();
}