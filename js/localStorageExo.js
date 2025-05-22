let prenom = document.getElementById("prenom");
let ul = document.getElementById("liste");
let id = 0;

function ajouterPrenom() {
  let li = document.createElement("li");
  li.textContent = prenom.value;
  li.id = id;
  id++;
  let liste = ul.appendChild(li);


}
ajouterPrenom();

function supprimerPrenom() {

}
