const mapSize = 4;

var map = [];

var peeps = [
  {x: 0, y: 3, symbol:"M", id: 1},
  {x: 1, y: 3, symbol:"F", id: 2}
]


var day = 0;

function initiateMap(){
  var r = 0;
  var newMap = [];
  
  while (r < mapSize){
    var row = [];

    var c = 0;
    while (c < mapSize){
      row.push("__")
      c++;
    }

    newMap.push(row)
    r++;
  }
  
  peeps.forEach(peep => {
    newMap[peep.y][peep.x] = peep.symbol;
  });

  map = newMap;

  return map
}

function printTable(tbody){
  initiateMap();
  //find peeps current locations, put in map

  var newTbody = document.createElement("tbody");
  var r = 0;
  while (r < mapSize){
    var row = document.createElement("tr");

    
    var c = 0;
    while (c < mapSize){
      
      var cell = document.createElement("td");
  
      cell.appendChild(document.createTextNode(map[r][c]));
  
      row.appendChild(cell);

      c++;
    }

    newTbody.appendChild(row);

    r++;
  }



  newTbody.id = "map";
  tbody.parentNode.replaceChild(newTbody, tbody);
  return tbody;
}
function addPeep(father, mother){
  peeps.push({x: mother.x, y: mother.y, symbol:"X", id: peeps.length})
}

function canMove(subject, movement){
  var result = false;

  if(subject.x + movement.x >= 0 && subject.x + movement.x < mapSize){
    if(subject.y + movement.y >= 0 && subject.y + movement.y < mapSize){
      result = true;
      //if two peeps are on top of each other, shout

      peeps.forEach(peep => {
        if (peep.id != subject.id && peep.x === subject.x && peep.y === subject.y){
          console.log("woot!")
          addPeep(peep, subject);
        }
      });
    }
  }

  return result;
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

function newDay(n){
  while (n>0){
    day ++;
    
    peeps.forEach(peep => {
      move(peep);
    });

    printTable (document.getElementById("map"));

    document.getElementById("day").innerHTML = "Day: " + day;
    n--;

  }
}

initiateMap();
printTable (document.getElementById("map"));

document.getElementById("day").innerHTML = "Day: " + day;