const mutation = 2;

var peeps = [
  {x: 0, y: 0, symbol:"M", id: 1, brain: {states: [], history: []}, distance: 1},
  {x: 1, y: 1, symbol:"F", id: 2, brain: {states: [], history: []}, distance: 1},
  {x: 2, y: 2, symbol:"M", id: 3, brain: {states: [], history: []}, distance: 1},
  {x: 3, y: 3, symbol:"F", id: 4, brain: {states: [], history: []}, distance: 1}
];

function addPeep(father, mother){
  var newPeep = {x: mother.x, y: mother.y, 
    symbol:"", 
    id: peeps.length, 
    brain: {states: mergeBrains(father, mother), history:[]}, 
    distance: mergeDistance(father, mother)}
  const genders = ["M", "F"]
  var gender = genders[Math.floor(Math.random()*genders.length)]
  newPeep.symbol = gender
  peeps.push(newPeep);
  console.log(newPeep)

  //somehow combine brains, genetics for distance
}

function mergeBrains(father, mother){
  return father.brain.states;
}

function mergeDistance(father, mother){
  var random = Math.floor(Math.random() * mutation);
  var basicDistance = (father.distance + mother.distance)/2;

  // if (random === 1){
  //   console.log("positive mutation commencing " + random)
  //   return Math.floor(basicDistance + 1);

  // }
  // if (random === 0){
  //   console.log(" negative mutation commencing " + random)
  //   if (basicDistance > 1){
  //     return Math.floor(basicDistance - 1);
  //   }
  // }

  return Math.floor(basicDistance)
}


