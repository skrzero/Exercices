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
  resultat.textContent="";
  resultat.style.backgroundColor = null;
  
  compteur++;
  document.getElementById("compteur").textContent = "Smoothies préparés : " + compteur;
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
 
  
}

// Fonction de reset
function boireSmoothie() {
  resultat.textContent="";
  resultat.style.backgroundColor = null;
}
