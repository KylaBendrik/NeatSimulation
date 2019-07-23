const mapSize = 4;

var map = [];

function initiateMap(){
  var r = 0;
  
  while (r < mapSize){
    var row = [];

    var c = 0;
    while (c < mapSize){
      row.push(c)
      c++;
    }

    map.push(row)
    r++;
  }
}

function printTable(tbody, map){
  var newTbody = document.createElement("tbody");
  var r = 0;
  
  console.log(r, mapSize)
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
initiateMap();
printTable (document.getElementById("map"), map);