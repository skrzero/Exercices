let btnPokemon = document.getElementById("btn-pokemon");
let pokemondisplay = document.getElementById("pokemon");

btnPokemon.addEventListener("click", async function () {
  let random = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
  let pokemon = await getPokemon(random);

  console.log(pokemon);

  pokemondisplay.textContent = `${pokemon.name}`;

  
  if (pokemon.types[0].type.name){
    pokemondisplay.textContent += ' Type 1 : ' + pokemon.types[0].type.name;
  }

  if(pokemon.types[1] != undefined) {
    pokemondisplay.textContent += " Type 2 : " + pokemon.types[1].type.name;
  } 

  // let typePokemon = pokemon.types.length;
  // console.log(typePokemon);

 
  // console.log(pokemon.types[0].type.name)
  
});

async function getPokemon(id) {
let json = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
let data = await json.json();
return data; 
}