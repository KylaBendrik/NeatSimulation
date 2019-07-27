function removeNom(nomNum){
  noms.splice(nomNum, 1)
  console.log(noms)

};
function newNom(){
  var size = random(19) + 1;

  noms.push({x: random(mapSize - size) + size, y: random(mapSize - size)+ size, quality: size});
  

};
