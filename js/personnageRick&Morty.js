// On récupère le nombre total de personnages
let totalPersonnages = 0;

async function initialiserNombreDePersonnages() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let data = await response.json();
  totalPersonnages = data.info.count;
}
// On démarre la fonction qui va définir le nombre de caractères dans la variable totalPersonnages
initialiserNombreDePersonnages();

// On récupère le bouton et la zone d'affichage avec leur ID
let bouton = document.getElementById("btn-rm");
let zoneAffichage = document.getElementById("character");

// On écoute le clic sur le bouton
bouton.addEventListener("click", async function () {
  if (totalPersonnages > 0) {
    try {
      let random = Math.floor(Math.random() * totalPersonnages) + 1;
      console.log("test");
      let url = `https://rickandmortyapi.com/api/character/${random}`;
      let response = await fetch(url);
      let data = await response.json();
      let soloPersonnage = {
        name: data.name,
        species: data.species,
        status: data.status,
        image: data.image,
      };
      console.log(soloPersonnage);
      zoneAffichage.innerHTML = `
  <h2>${soloPersonnage.name}</h2>
  <p>Espèce : ${soloPersonnage.species}</p>
  <p>Status : ${soloPersonnage.status}</p>
  <img src="${soloPersonnage.image}" alt="${soloPersonnage.name}" />
`;
    } catch (error) {
      console.error(error);
    }
  }
});
