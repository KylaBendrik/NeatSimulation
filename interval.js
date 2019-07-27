window.onkeydown = function(event) {
  var keyPr = event.keyCode; //Key code of key pressed


  if (keyPr === 32){
    if (isPaused === false){
      isPaused = true;
      timer.resume()
      document.getElementById("paused").innerHTML = "Paused"
    } else {        
      isPaused = false;
      timer.pause()
      document.getElementById("paused").innerHTML = "Playing"
    }
  }


   console.log(keyPr);
  /*clearing anything drawn on canvas
   *comment this below do draw path */
  ctx.clearRect(0,0, 500, 500);

  //Drawing rectangle at new position
  drawRect(x,y,wid,hei);
};

function RecurringTimer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    var resume = function() {
        start = new Date();
        timerId = window.setTimeout(function() {
            remaining = delay;
            resume();
            callback();
        }, remaining);
    };

    this.resume = resume;

    this.resume();
}

