// Liste fixe de fruits
const fruits = [
  "fraise",
  "banane",
  "kiwi magique",
  "pomme",
  "ananas",
  "framboise",
  "mangue",
];

let compteur = 0; // Compteur initialisé à zéro
let indexDepart = 0; // Point de départ dans le tableau
let resultat = document.getElementById("resultat");
let canPrepareSmoothie = true;
// Fonction de préparation
function preparerSmoothie() {
  if (canPrepareSmoothie === false) {
    return;
    // return stop la lecture de la fonction
  }
  compteur++;
  document.getElementById("compteur").textContent =
    "Smoothies préparés : " + compteur;
  for (let i = 0; i < 3; i++) {
    let indexFruits = Math.round(Math.random() * (6 - 0));
    let paragraphe = document.createElement("p");
    paragraphe.textContent = fruits[indexFruits];
    resultat.appendChild(paragraphe);
    if (fruits[indexFruits] ==="kiwi magique"){
        resultat.style.backgroundColor = "green";
    }
    // resultat.textContent += fruits[indexFruits];
    
  }
  canPrepareSmoothie = false;
}

// Fonction de reset
function boireSmoothie() {
  resultat.textContent="";
  canPrepareSmoothie =true;
  resultat.style.backgroundColor = null;
}
