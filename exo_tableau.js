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





