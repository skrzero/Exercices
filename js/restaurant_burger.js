let prenom = prompt("Quel est ton prénom ?");
let nombreBurgers = parseInt(prompt("Combien de burgers veux-tu ?"));
let veutMenu = prompt("Veux-tu un menu ? (oui/non)").toLowerCase();
const prixBurger = 5;
const supplementMenu = 3;

function total (){
    if (veutMenu === "oui"){
       return ((prixBurger + 3)  *nombreBurgers) + "€";
    } else {
       return (prixBurger * nombreBurgers) + "€";       
    }
    
}
console.log(total())

let countLetter = prenom.length;
let prixtotal = total();

console.log(countLetter);
// alert ("merci"+prenom+"!"+"ta commande de"+nombreBurgers+"burgers coute" + total());

alert (`Merci ${prenom} ! Ta commande de ${nombreBurgers} burgers coûte ${prixtotal}`)

function erreur(){
    if (isNaN(nombreBurgers <=0)){
        alert ("commande invalide")
    }
}
let erreurMenu = veutMenu;
if (veutMenu !== "oui","non"){
    
} else {
    alert ("reponse invalide pour le menu")
}