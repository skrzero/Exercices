function reponseFausse(){
  let text = document.getElementById("resultat");
  text.textContent = "Mauvaise reponse";
  text.style.color = "red";
}
function reponseBonne(){
  let text = document.getElementById("resultat");
  text.textContent = "Bonne reponse";
  text.style.color = "green";
}
function reset(){
let reset2 = document.getElementById("resultat");
reset2.textContent="";
}