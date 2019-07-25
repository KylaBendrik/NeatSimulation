function canMove(subject, movement){
  var result = false;

  if(subject.x + movement.x >= 0 && subject.x + movement.x < mapSize){
    if(subject.y + movement.y >= 0 && subject.y + movement.y < mapSize){
      if (map[subject.y][subject.x].length < 2){
        result = true;
        //if two peeps are on top of each other, shout
        peeps.forEach(peep => {
          if (peep.x === subject.x && peep.y === subject.y){
            if (peep.symbol === "M" && subject.symbol === "F"){
              console.log("History saved")
              reward(peep);
              reward(subject);
              addPeep(peep, subject);
            }
            if (peep.symbol === subject.symbol && peep.id != subject.id){
              console.log("nope. not a good plan")
                punish(peep);
                punish(subject);
            }
          }         
        });
      } else {
        console.log ("space too full")
        punish(subject);
      }
    }
  }
  return result;
}

function reward(peep){
  console.log(peep)
  //add move done to each state walked through
  peep.brain.history.forEach(click => {
    console.log(click.state + " peep went " + click.move)
    var state = peep.brain.states.find(state => state.id === click.state);
    state.moves.push(click.move);
  })

  //wipe history
  peep.brain.history = [];
}

function punish(peep){
  //remove move done to each state walked through
  peep.brain.history.forEach(click => {
    console.log(click.state + " peep went " + click.move)
    var state = peep.brain.states.find(state => state.id === click.state);
    
    //remove move
    var indexOfMove = peep.brain.states.moves.findIndex(move => move === click.move);
    
    state.moves.splice(indexOfMove, 1)
  })

  //wipe history
  peep.brain.history = [];
}

//moves:
//0 - stand still
//1 - north
//2 - east
//3 - south
//4 - west

function newDefaultState(stateID){
  return {id: stateID, moves: [0, 1, 2, 3, 4]}
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
    F: 3,
    MF: 4,
    FM: 4,
    MM: 5,
    FF: 6
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
  const moveTypes = [{x: 0, y: 0}, {x: 0, y: -1}, {x: 1, y:0}, {x: 0, y:1}, {x: -1, y:0}]
  var stateID = findState(peep);
  //if state is new, then newDefaultState
  if (peep.brain.states.findIndex(state => state.id === stateID) === -1){
    var state = newDefaultState(stateID);
    peep.brain.states.push(state);
  } else {
    var state = peep.brain.states.find(state => state.id === stateID);
  }

  var random = Math.floor(Math.random() * state.moves.length)

  var move = state.moves[random]


  if (canMove(peep, moveTypes[move])){
    peep.x += moveTypes[move].x;
    peep.y += moveTypes[move].y;

    peep.brain.history.push({state: stateID, move: move})
  }
}
