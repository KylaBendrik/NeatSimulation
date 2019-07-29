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
    

    //report distance to wall
    if (sight.x2 < 0){
      return sight.x1;
    }
    if (sight.y2 < 0){
      return sight.y1; 
    }
    if (sight.x2 > mapSize){
      return mapSize - sight.x1
    }
    if (sight.y2 > mapSize){
      return mapSize - sight.y1;
    }

    return 1;
  }
  return 0
}

function checkInputs(peep){
  var inputs = [];
  //two inputs for each sight: wallSight, then nomSight for each direction
  var sights = findSights(peep);

  sights.forEach(function(sight){
    inputs.push(wallSight(sight)) ;
  })
  return inputs
}



//brain
//  4 inputs, 4 outputs (so each can have an off and on. If we had N be -1 and S be +1, then it would ALWAYS be
//  going either north or south, but we want it to be able to go in one direction at a time.)
function hiddenLayer(peep){

  var inputs = checkInputs(peep);

  var i = 0;

  var hiddenNodes = [];

  while (i < peep.hlNodes){
    var w = 0
    nodeValue = 0
    //each node takes in all the inputs and their weights. For now, lets have as many hidden layer nodes as outputs.
    //for each input, multiply it by its weight, add to total Node Value
    inputs.forEach(function(input){
      //nodeValue += input * weight
      nodeValue += (input * peep.weights[w*(i+1)])
      console.log(input)
      w++;
    })
    hiddenNodes.push(nodeValue)
    i++;
  }
  console.log(hiddenNodes);
  return (hiddenNodes);
}

//OUTPUTS: - right now, we're just going to go north.

//this is the activator function
function activate(input){
  return Math.sign(input);
}

function outputs(hiddenLayer){
  //Outputs: NORTH ([0,-1])
  var outputs = []

  hiddenLayer.forEach(function(node){
    outputs.push(activate(node));
  })
  return outputs
}

function punish(peep, amount){
  peep.score -= amount;
}

function reward(peep, amount){
  peep.score += amount;
}

function move(peep){
  //move rectangle randomly
  const moves = [[-1, 0],[0, 1],[1, 0],[0, -1]]

  // var move = moves[random(moves.length)]

  //now, instead of random as above, it will be dictated by the inputs.
  var move = [0, 0];

  var hiddenLayer = hiddenLayer(peep);

  var outputs = outputs(hiddenLayer);

  console.log(outputs)



  //if movement would move peep outside bounds, punish
  if (touchWall(peep, move) === 1){
    punish(peep, 1);
  } else {
    peep.x += move[0];
    peep.y += move[1];
  }

  touchNom(peep);


  
  drawMap()

  //update score
  document.getElementById("score").innerHTML = peep.score
}