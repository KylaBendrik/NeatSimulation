function removeNom(nomNum){
  noms.splice(nomNum, 1)
  console.log(noms)

};
function newNom(){
  noms.push({x: random(mapSize - 20), y: random(mapSize - 20), quality: random(19) + 1});
  

};