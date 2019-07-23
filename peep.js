var peeps = [
  {x: 1, y: 3, symbol:"M", id: 1, brain: {}, moves: []},
  {x: 3, y: 3, symbol:"F", id: 2, brain: {}, moves: []}
];

function addPeep(father, mother){
  const genders = ["M", "F"]
  var gender = genders[Math.floor(Math.random()*genders.length)]
  peeps.push({x: mother.x, y: mother.y, symbol:gender, id: peeps.length})

  //somehow combine brains
}


