// On récupère le nombre total de personnages
let totalPersonnages;

// Pour suivre où on en est dans l'affichage (1ère page, 2e, etc.)
// let pageActuelle = 0;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
  console.log(totalPersonnages);
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

let galerie = document.getElementById("galerie");
let boutonMulti = document.getElementById("btn-multi");

boutonMulti.addEventListener("click", async function () {
  console.log("bouton");
  galerie.innerHTML = ""; // On vide la galerie
  
  let ids = new Set();
  while (ids.size < 10) {
    let random = Math.floor(Math.random() * totalPersonnages) + 1;
    if (!ids.has(random)){
      ids.add(random);
    }
    console.log(random);
    let response = await fetch(
      "https://rickandmortyapi.com/api/character/" + random
    );

    let data = await response.json();
    let infoTab = {
      name: data.name,
      status: data.status,
      image: data.image,
      species: data.species,
    };
    console.log(infoTab);
    galerie.innerHTML += `
     <div class ="carte">
     <h2>${data.name}</h2>
     <p>status : ${data.status}</p>
     <p>especes : ${data.species}</p>
     <img src="${data.image}"/>
     </div>
     `;
  }

  // Si on a dépassé le nombre total de personnages, on revient à la première page
  // À faire avec pageActuelle;
  // if () {

  // }
});
