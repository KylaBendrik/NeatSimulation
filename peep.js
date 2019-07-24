var peeps = [
  {x: 2, y: 3, symbol:"M", id: 1, brain: {states: [], history: []}, distance: 1},
  {x: 3, y: 3, symbol:"F", id: 2, brain: {states: [], history: []}, distance: 1}
];

function addPeep(father, mother){
  var newPeep = {x: mother.x, y: mother.y, 
    symbol:"", 
    id: peeps.length, 
    brain: {states: mother.brain.states, moves:[]}, 
    distance: mother.distance}
  const genders = ["M", "F"]
  var gender = genders[Math.floor(Math.random()*genders.length)]
  newPeep.symbol = gender
  peeps.push(newPeep);

  //somehow combine brains, genetics for distance
}


