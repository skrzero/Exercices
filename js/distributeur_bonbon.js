const bonbon= 2;
let moneyIn =parseInt(prompt("combien d'argent veut tu inserer"));
let reste = moneyIn;
let bouton = confirm("rendre la monnaie");
while (reste > 2){
if (moneyIn >= 2){
    reste -= bonbon;
    console.log ("donne un bonbon")
} 
if (reste >bonbon){
    console.log("reste "+ reste + "€");
    
} else if (bouton){
    console.log("rendre " + reste +" €");

} else {
    console.log("credit insuffisant");
}
}
// creer un boucle for ou while afin de depenser tout les credit de la machine 


