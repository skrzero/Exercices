// defi 1
let prenom = prompt ("indiquer votre prenom");
let saluerUtilisateur = ("Bonjour," + prenom +"!.");
console.log(saluerUtilisateur);

// defi 2
function addition(valeur1,valeur2){
    let nombre1= parseInt(prompt("indiquer un nombre"));
    let nombre2= parseInt(prompt("indiquer un deuxieme nombre"));
    let resultat= nombre1 + nombre2;
    return resultat;
}
// quand on appel une function mettre les ()
console.log(addition());

// defi 3
function estPair(NB){
    if (NB % 2 === 0){
        return NB + " est un nombre pair.";
    } else {
        return NB + " est un nombre impair.";
    }
}
let nombreTest =parseInt(prompt("indiquer un nombre"));
console.log(estPair(nombreTest));

// defi 4
function calculerMoyenne(){
    let N1 =parseInt(prompt("indiquer un nombre"));
    let N2 =parseInt(prompt("indiquer un deuxieme nombre"));
    let N3 =parseInt(prompt("indiquer un troisieme nombre"));
    let resultat = N1 + N2 + N3;
    let moyenne = resultat / 3;
    return moyenne;
}
console.log(calculerMoyenne());

// defi 5
// math.max("valeur que lon veux,var2,var3") renvoie le plus grand chiffre/nombre contenue dans les parenthese 
function plusGrand(){
    let value1 =parseInt(prompt("Valeur 1"));
    let value2 =parseInt(prompt("Valeur 2"));
    let resultValue= Math.max(value1,value2);
    return resultValue;
}
console.log(plusGrand());