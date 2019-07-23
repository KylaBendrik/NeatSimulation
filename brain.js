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

  const distance = 1;

  
}

function move(peep){
  const options = [
    {x: 0, y: -1},
    {x: 0, y: 1},
    {x: -1, y: 0},
    {x: 1, y: 0}
  ];
  var random = Math.floor(Math.random() * options.length);
  console.log(random);
  var movement = options[random];
  console.log(movement)
  if (canMove(peep, movement)){
    peep.x += movement.x;
    peep.y += movement.y;
  }
}