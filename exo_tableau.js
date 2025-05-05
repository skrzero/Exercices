let animaux = ["chien","chat","lapin"];
let couleurs = ["rouge","vert","bleu"];
// console.log(couleurs[1]);
animaux[0]= "hamster";
// console.log(animaux);

// exo 2
animaux.push("perroquet");
// console.log(animaux);
animaux.shift();
// console.log(animaux);
// console.log(animaux.includes("chat"));
// console.log(animaux.join(' '));

// exo 3
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nombres.length);

// exo 4
let valeur = [10, 20, 20, 30, 40, 40, 50];
let doublon = valeur.filter((number,index)=> valeur.indexOf(number)===index)


/*Filter fait comme un forEach, il va donc y avoir 7 passage (car il y a 7 éléments dans le tableau valeur)
Dans le premier passage : number = 10 (premier élément du tableau) et index = 0

valeur.indexOf(10) === 0 - >VRAI

Ensuite deuxième passage : number = 20 (deuxième élément du tableau) et index = 1
valeur.indexOf(20) === 1 -> VRAI

Ensuite, 3eme passage : number = 20 et index = 2
valeur.indexOf(20) === 2 -> FAUX car le premier élément égal à 20 dans le tableau valeur est à l'index 1*/

// console.log(doublon);

// exo 5
let mot= ['Pomme', 'Banane', 'Abricot', 'Cerise']

function displayArray(tab) {
	return tab.join(' ');
}
// console.log(displayArray(mot));

// exo 6
let tableau = ['Pomme', 'Banane', 'Abricot', 'Cerise'];
function displayArray2(tab2){
	tab2.splice(3, 0,"et");
	return tab2.join(' ');
	
}
// console.log(displayArray2(tableau))

// exo 7
let fruits = ['Pomme', 'Banane', 'Abricot', 'Cerise'];

function displayArray3(tabM, useAnd) {
    let copy = [...tabM]; // copie du tabM

    if (useAnd === true && copy.length > 1) {
        let last = copy.pop(); // enleve le dernier element
        return copy.join(', ') + ' et ' + last;
    } else {
        return copy.join(', '); // liste simple
    }
}

// console.log(displayArray3(fruits, true));   // Pomme, Banane, Abricot et Cerise
// console.log(displayArray3(fruits, false));  // Pomme, Banane, Abricot, Cerise

// exo 8
let alpha = "je suis en train d'apprendre le JavaScript";

function sortWordsInString(CDM,bool){
let mot = CDM.split(" ");
mot.sort ((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
return mot.join(" ");
}
// console.log(sortWordsInString(alpha));

// exo 9
let nombres2 = [1, 2, 3, 4, 5, 6];
const resultat2 = nombres2
  .filter(nombre => nombre % 2 === 0)   //  garde uniquement les nombres pairs
  .map(nombre => nombre * 2);          //  multiplie chaque nombre pair par 2

// console.log(resultat2); 

// exo 10
function roundDownArray() {
	let arrondi = [3.7, 8.4, 2.1, 5.9];
	let rond = [];
  
	for (let i = 0; i < arrondi.length; i++) {
	  rond.push(Math.floor(arrondi[i]));
	}
  
	return rond;
  }
  
//   console.log(roundDownArray()); 

// exo 11
function sumOfArray(){
	let arrondi2 =[3.7, 8.4, 2.1, 5.9];
	let resultat3 = [];
	
	for (let i = 0; i < arrondi2.length; i ++){
		resultat3.push(Math.floor(arrondi2[i]));
	}
	let moyenne2 = resultat3.reduce((a, b) => a + b, 0);
	return moyenne2;
}
console.log(sumOfArray());
  




