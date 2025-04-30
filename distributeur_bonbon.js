const bonbon= 2;
let moneyIn =parseInt(prompt("combien d'argent veut tu inserer"));
let reste = moneyIn - bonbon;
let monnaie = moneyIn - reste;
let bouton = confirm("rendre la monnaie");
if (moneyIn >= 2){
    console.log ("donne un bonbon")
} 
if (moneyIn >bonbon){
    console.log("reste "+ reste + "€");
    
} else if (bouton){
    console.log("rendre " + reste +" €");

} else {
    console.log("credit insuffisant");
}
// creer un boucle for ou while afin de depenser tout les credit de la machine 


