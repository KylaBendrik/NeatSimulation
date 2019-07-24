function canMove(subject, movement){
  var result = false;

  if(subject.x + movement.x >= 0 && subject.x + movement.x < mapSize){
    if(subject.y + movement.y >= 0 && subject.y + movement.y < mapSize){
      result = true;
      //if two peeps are on top of each other, shout

      peeps.forEach(peep => {
        if (peep.symbol === "F" && subject.symbol === "M" && peep.x === subject.x && peep.y === subject.y){
          console.log("woot!")
          addPeep(peep, subject);
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
    M: 1,
    F: 2
  }

  while (rowNum < diameter){
    
    var colNum = 0
    while (colNum < diameter){
      console.log ("row = " + (startingSpot.y + rowNum) + ", col = " + (startingSpot.x + colNum) + ": " + map[startingSpot.y + rowNum][startingSpot.x + colNum])
      var newNum = stateNums[map[startingSpot.y + rowNum][startingSpot.x + colNum]];
      state =  ((state << 3) + newNum);

      
      colNum ++;
    }

    rowNum ++;
  }


  console.log (map);
  
   
  return state;
}

function move(peep){
  var stateID = findState(peep);
  console.log((stateID).toString(2) + " = " + stateID);
  //if state is new, then newDefaultState
  var state = newDefaultState(stateID);
  peeps.brain.states.push(state);

  console.log(peep)
}