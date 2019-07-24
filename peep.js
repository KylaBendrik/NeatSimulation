var peeps = [
  //{x: 1, y: 3, symbol:"M", id: 1, brain: {}, moves: [], distance: 1},
  {x: 3, y: 3, symbol:"F", id: 2, brain: {}, moves: [], distance: 1}
];

function addPeep(father, mother){
  var newPeep = {x: mother.x, y: mother.y, symbol:"", id: peeps.length, brain: mother.brain, moves: [], distance: mother.distance}
  const genders = ["M", "F"]
  var gender = genders[Math.floor(Math.random()*genders.length)]
  newPeep.symbol = gender
  peeps.push(newPeep);

  //somehow combine brains, genetics for distance
}


