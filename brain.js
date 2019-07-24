function canMove(subject, movement){
  var result = false;

  if(subject.x + movement.x >= 0 && subject.x + movement.x < mapSize){
    if(subject.y + movement.y >= 0 && subject.y + movement.y < mapSize){
      result = true;
      //if two peeps are on top of each other, shout

      peeps.forEach(peep => {
        if (peep.symbol === "F" && subject.symbol === "M" && peep.x === subject.x && peep.y === subject.y){
          console.log("woot!")
          //addPeep(peep, subject);
        }
      });
    }
  }

  return result;
}

//moves:
//0 - north
//1 - east
//2 - south
//3 - west

function newDefaultState(stateID){
  return {id: stateID, moves: [0, 1, 2, 3]}
}

function findState(peep){
  //Empty = 000
  //M = 001
  //F = 010

  //define spaces to look:
  // XXX
  // XXX
  // XXX

  //starting space = subtract distance from both x and y

  var startingSpot = {
    x: peep.x - peep.distance, 
    y: peep.y - peep.distance
  }

  var diameter = (peep.distance * 2) + 1;
  //if peep.distance = 1, then diameter = 3

  var rowNum = 0
  var state = [];

  var stateNums = {
    __: 0,
    X: 1,
    M: 2,
    F: 3
  }

  while (rowNum < diameter){
    
    var colNum = 0
    while (colNum < diameter){
      if (map[startingSpot.y + rowNum] === undefined || map[startingSpot.y + rowNum][startingSpot.x + colNum] === undefined){
        var newNum = 1;
      } else {
        var newNum = stateNums[map[startingSpot.y + rowNum][startingSpot.x + colNum]];
      }
      state =  ((state << 3) + newNum);

      
      colNum ++;
    }

    rowNum ++;
  } 
   
  return state;
}

function move(peep){
  const moveTypes = [{x: 0, y: -1}, {x: 1, y:0}, {x: 0, y:1}, {x: -1, y:0}]
  var stateID = findState(peep);
  console.log((stateID).toString(2) + " = " + stateID);
  //if state is new, then newDefaultState
  if (peep.brain.states.findIndex(state => state.id === stateID) === -1){
    var state = newDefaultState(stateID);
    peep.brain.states.push(state);
  } else {
    var state = peep.brain.states.find(state => state.id === stateID);
  }

  var random = Math.floor(Math.random() * state.moves.length)

  var move = state.moves[random]

  console.log(canMove(peep, moveTypes[move]))

  if (canMove(peep, moveTypes[move])){
    peep.x += moveTypes[move].x;
    peep.y += moveTypes[move].y;

    peep.brain.history.push({state: stateID, move: move})
  }


  console.log(peep.symbol + "'s brain states: (" + peep.brain.states.length + ") ")
  console.log(peep.brain.states)
  console.log(peep.brain.history)
}