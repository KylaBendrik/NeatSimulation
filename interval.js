var click = 0;

var isPaused = false;

const interval = 5

var timer = setInterval(doStuff, interval);

function doStuff() {
  click += 1;
  document.getElementById("click").innerHTML = click;
  move(peep1);
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
      timer = setInterval(doStuff, interval);
    }
  }
};