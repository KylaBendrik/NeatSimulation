const mapSize = 8;
var map = [];
var day = 0;

function mapColors(symbol){
  return {
    "__": "#FFFFFF",
    "M": "#a9d5ff",
    "F": "#f6aaff"
  }[symbol]
}

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

      cell.style.backgroundColor = mapColors(map[r][c])
  
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