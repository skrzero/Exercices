let prenom = document.getElementById("prenom");
let ul = document.getElementById("liste");
let id = 0;

function ajouterPrenom() {
  let li = document.createElement("li");
  li.textContent = prenom.value;
  li.id = id;
  id++;
  let liste = ul.appendChild(li);
  prenom.value = "";
  sauvegardePrenom();
}


function supprimerPrenom() {
  let trouver = false;
  let itemLi = ul.getElementsByTagName("li"); /* recupere tout les element "li" de ul*/
  for (let li of itemLi) {
    if (li.textContent === prenom.value) {
      li.remove();
      trouver = true;
      prenom.value = "";
      sauvegardePrenom();
      return;
    }
  }
  if (!trouver) {
    /* si la boucle na pas trouver = false l'alert ce lance sinon il ne fait rien */
    alert("prenom inexistant");
  }

  let donnees = localStorage.getItem("listePrenoms");
  if (donnees !== null) {
    let prenoms = JSON.parse(donnees);
    
  }
}


function sauvegardePrenom() {
  let prenoms = [];
  let itemLi = ul.getElementsByTagName("li");
  for (let li of itemLi) {
    prenoms.push(li.textContent);
  }
  let tableau = JSON.stringify(prenoms);
  localStorage.setItem("listePrenoms", tableau);
  console.log(prenoms);
}
sauvegardePrenom();

window.onload = function () {
  ul.innerHTML = ""; // vide la liste avant de la remplir
  let donnees = localStorage.getItem("listePrenoms");
  if (donnees !== null) {
    let prenoms = JSON.parse(donnees);
    for (let p of prenoms) {
      let li = document.createElement("li");
      li.textContent = p;
      ul.appendChild(li);
    }
  }
};

