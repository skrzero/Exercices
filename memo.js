// variable
let caractere = "pomme"; /* chaine de caractere*/
let nombre = 100; /* nombre */
let tableau =["pierre", "feuille", "ciseaux"]; /* tableau chaque element porte un chiffre commencant par 0 */
let objet = {nom: 'Alice', age: 30 } /* les objet peuvent etre appeler en ajoutant un point ex objet.nom */
const immuable = "temps" /* une constante qui ne changera pas */

// operateur
/*  Opérateur  Description                        | Exemple   |
  ==       Égal à (valeur)                        x == y  
  ===      Strictement égal (valeur + type)`      x === y
  !=       Différent (valeur)                     x != y  
  !==      Strictement différent                  x !== y 
  >        Supérieur à                            x > y   
  <        Inférieur à                            x < y   
  >=       Supérieur ou égal à                    x >= y  
  <=       Inférieur ou égal à                    x <= y  

  +        Addition                              x + y        
  -        Soustraction                          x - y        
  *        Multiplication                        x * y        
  /        Division                              x / y        
  %        Modulo (reste)                        x % y        
  **       Exponentiation                        x ** y       
  ++       Incrémentation                        x++ ou ++x 
  --       Décrémentation                        x-- ou --x 

  =        Affectation simple                    x = y 
  +=       Addition et affectation               x += y 
  -=       Soustraction et affect.               x -= y 
  *=       Multiplication et aff.                x *= y 
  /=       Division et affectation               x /= y 
  %=       Modulo et affectation                 x %= y 
  &&       ET logique L'opérateur                && vérifie deux conditions : Si la condition de gauche est vraie 
                                                 ET si la condition de droite est vraie Alors seulement, le résultat sera true. sinon c'est faux

  ||       OU logique                            Ici,let isAdmin = false, mais let isUser = true. Donc l’une des deux est vraie
                                                 = le message s’affiche.*/

// les function()
function simple(){
    console.log("hello");
}
simple(); /* appel simple de la function donc dit hello dans la console*/

function avecParametre (prenom,age){
    console.log("bonjour" + prenom + "tu as " + age + "ans");
}
avecParametre("pierre (prenom)", "32 (age)") /* les parametre ce lit de gauche a droite il sont separer par une virgule (,)*/


let fruits = ["Pomme", "Banane", "Orange"];
function tableauElements(tab) {
  for (let i = 0; i < tab.length; i++) { /*Parcourt chaque élément du tableau à partir de l'index 0 (pomme) jusqu'au dernier (orange)*/
    console.log("Élément :", tab[i]);
  }
}
tableauElements(fruits);


function estPair(nombre) {
  if (nombre % 2 === 0) { /* modulo ne divise mais mais donne le reste 7/3 = 1 car il reste 1 a la fin */
    return true; /* dans l'exemple si il est egal a 0 il est vrai sinon il est faux */
  } else {
    return false;
  }
}

console.log(estPair(4)); // true
console.log(estPair(7)); // false


// les boucles 
let str = 'Lucie';
for (let i = 0; i < 5; i++) { /* la boucle for s'utilise quand tu connais les quantité */
	console.log('Itération numéro:', i);
	console.log(str.charAt(i)); /*charAt(i) Affiche chaque lettre du prénom Lucie, une par une.*/
}
// while
let cailloux = 0;
while (cailloux < 5) { /* tant que cailloux reste inferieur a 5 il continue, la boucle while s'utilise quand on doit compter quelque chose sans connaitre les quantités */
	console.log('Itération numéro:', cailloux);
	cailloux++;
}

// tableaux
let tabfruits = ['pomme', 'poire', 'abricot'];
console.log(tabfruits.length);
console.log(tabfruits[1]); /* la case 1 correspond a "poire"*/
tabfruits[6] = 'mangue'; /*rajoutes une mangue à la case 6. en laissant des espaces indefined (vide) entre la case 2 et 6 */
console.log(tabfruits); /* regarde les elements dans le tableau y compris les emplacements vides [0] a [6]*/
console.log(tabfruits[18]); /* remonte "indefined" car la case 18 n'existe pas*/

// copie de tableau
const valeurTableau = [1, 23, 38, 3, 89, 8];
const copyTableau = [...valeurTableau]; /* ici on recupere on copie avec l'operateur "..." valeurTableau*/
copyTableau[1] = 1; /* modification de l'element N°1 de la copyTableau  23 = 1*/
console.log('array de base', valeurTableau);/* = [1, 23, 38, 3, 89, 8]*/
console.log('array modifié', copyTableau); /*  = [1, 1, 38, 3, 89, 8]*/