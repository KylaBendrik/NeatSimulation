var click = 0;

var isPaused = false;

var timer = setInterval(doStuff, 500);

function doStuff() {
  click += 1;
  document.getElementById("click").innerHTML = click
}

function stopStuff() {
  clearInterval(timer);
}

window.onkeydown = function(event) {
  var keyPr = event.keyCode; //Key code of key pressed


  if (keyPr === 32){
    if (isPaused === false){
      isPaused = true;
      document.getElementById("paused").innerHTML = "Paused"
      stopStuff();
    } else {        
      isPaused = false;
      document.getElementById("paused").innerHTML = "Playing"
      timer = setInterval(doStuff, 500);
    }
  }


   console.log(keyPr);
  /*clearing anything drawn on canvas
   *comment this below do draw path */
  ctx.clearRect(0,0, 500, 500);

  //Drawing rectangle at new position
  drawRect(x,y,wid,hei);
};