const mapSize = 8;
var map = [];
var day = 0;

function mapColors(symbol){
  return {
    "__": "#FFFFFF",
    "M": "#a9d5ff",
    "F": "#f6aaff",
    "MF": "#c37fff"
  }[symbol]
}

function initiateMap(){
  var r = 0;
  var newMap = [];
  
  while (r < mapSize){
    var row = [];

    var c = 0;
    while (c < mapSize){
      //let's have an array containing all the peeps sitting here.
      row.push([])
      c++;
    }

    newMap.push(row)
    r++;
  }
  
  peeps.forEach(peep => {
    newMap[peep.y][peep.x].push(peep.symbol);
    console.log(newMap[peep.y][peep.x][0])
  });

  map = newMap;

  return map
}

function cellDisplay(mapNode){
  console.log(mapNode)
  if (mapNode.length === 0){
    return "__";
  }
  if (mapNode.length === 1){
    return mapNode[0];
  }
  if (mapNode.length === 2){
    var display = (mapNode[0] + mapNode[1]);
    if (display === "FM"){
      return (mapNode[1] + mapNode[2])
    }
    return (mapNode[0] + mapNode[1])
  }
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
      cell.appendChild(document.createTextNode(cellDisplay(map[r][c])));

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