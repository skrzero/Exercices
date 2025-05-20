let btnPokemon = document.getElementById("btn-pokemon");
let pokemondisplay = document.getElementById("pokemon");

btnPokemon.addEventListener("click", async function () {
  let random = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
  let pokemon = await getPokemon(random);
  console.log(pokemon.name);
  pokemondisplay.textContent = `${pokemon.name},${pokemon.sprites}`;
  
});

async function getPokemon(id) {
let json = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
let data = await json.json();
return data; 
}