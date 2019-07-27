//NEURAL NETWORK ATTEMPT #1

//INPUTS:
//sight - size*2



//Touch - touching the wall
function touchWall(peep, move){
  if ((move[0] === -1 && peep.x <= 0) ||
    (move[0] === 1 && peep.x >= (mapSize - 20)) ||
    (move[1] === -1 && peep.y <= 0) ||
    (move[1] === 1 && peep.y >= (mapSize - 20))){
    return 1
  } else {
    return 0
  }
}
//Touch - touching the food
function touchNom(peep){
  noms.forEach(function(nom) {
    if (intersects(peep, boundBox(nom))){
      reward(peep, nom.quality)
      console.log ("noms!");
      console.log(noms.indexOf(nom))
      removeNom(noms.indexOf(nom));
      newNom();

      return 1
    }
  })
  return 0;
}

//wallSight
function wallSight(sight){
  if (sight.x2 < 0 ||
      sight.x2 > mapSize ||
      sight.y2 < 0 ||
      sight.y2 > mapSize){
    
    console.log("Crossing the wall");
  }
}

//brain
function checkInputs(peep){

  //two inputs for each sight: wallSightN, nomSightN, wallSightW, etc.
  var sights = findSights(peep);

  sights.forEach(function(sight){
    wallSight(sight);
  })


}

//OUTPUTS:
//N/S 
//E/W

function punish(peep, amount){
  peep.score -= amount;
}

function reward(peep, amount){
  peep.score += amount;
}

function move(peep){
  //move rectangle randomly
  const moves = [[1, 0],[0, 1],[-1, 0],[0, -1]]

  var move = moves[random(moves.length)]


  //if movement would move peep outside bounds, punish
  if (touchWall(peep, move) === 1){
    punish(peep, 1);
  } else {
    peep.x += move[0];
    peep.y += move[1];
  }

  touchNom(peep);

  checkInputs(peep);

  
  drawMap()

  //update score
  document.getElementById("score").innerHTML = peep.score
}