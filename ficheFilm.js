let film = {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    annee: 2010,
    duree: 148,
    vu: false
  };
  console.log(film.titre);
  let reponse =prompt("as tu vu ce film ?");

   if (reponse==="oui"){
    film.vu = true; 
    // console.log(film);
    let note =Number(prompt("donnez une note entre 1 et 5"));
    film.note = note;

    afficherFiche(film);

    console.log(film);
   } else {
    console.log(film);
   }

function afficherFiche(fiche){
    document.getElementById('resultat').innerHTML = `
    <h2>${fiche.titre}</h2>
    `;

}
