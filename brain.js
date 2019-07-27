//NEURAL NETWORK ATTEMPT #1

//INPUTS:
//Touch - touching the wall

//OUTPUTS:
//N/S 
//E/W

function punish(peep, amount){
  peep.score -= amount;
}

function move(peep){
  //move rectangle randomly
  const moves = [[1, 0],[0, 1],[-1, 0],[0, -1]]

  var move = moves[random(moves.length)]

  ctx.clearRect(0,0, mapSize, mapSize);

  console.log ("peep location: " + peep.x + ", " + peep.y)

  //if movement would move peep outside bounds, punish
  if ((move[0] === -1 && peep.x <= 0) ||
    (move[0] === 1 && peep.x >= (mapSize - 20)) ||
    (move[1] === -1 && peep.y <= 0) ||
    (move[1] === 1 && peep.y >= (mapSize - 20))){
    punish(peep, 1);
  } else {
    peep.x += move[0];
    peep.y += move[1];
  }


  
  //Drawing rectangle at new position
  drawRect(peep.x,peep.y,peep.wid,peep.hei);

  //update score
  document.getElementById("score").innerHTML = peep.score
}