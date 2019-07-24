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
  var state = "";

  var stateNums = {
    __: "000",
    M: "001",
    F: "010"
  }

  while (rowNum < diameter){
    
    var colNum = 0
    while (colNum < diameter){
      console.log ("row = " + (startingSpot.y + rowNum) + ", col = " + (startingSpot.x + colNum) + ": " + map[startingSpot.x + colNum][startingSpot.y + rowNum])

      state += (stateNums[map[startingSpot.x + colNum][startingSpot.y + rowNum]])
      colNum ++;
    }

    rowNum ++;
  }


  console.log (map);
  console.log (state);
}

function move(peep){
  findState(peep);
}