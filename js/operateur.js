function exoa() {
let age = 20;
let motDePasse= "afec";
let motEntreParLeJoueur= prompt ("entrez le mot de passe du donjon:");
let aUnBadgeMagique =true;
let niveauDeForce= prompt ("force" );

console.log(age);
console.log(motDePasse);
console.log(motEntreParLeJoueur);
console.log(aUnBadgeMagique);
console.log(niveauDeForce);


// if (age >= 18 && aUnBadgeMagique ==true && niveauDeForce >= 7 && motDePasse =="afec" ) {
//    alert("bienvenue dans le donjon, aventurier!")
// } else {
//     alert("acces refusé.")
// }

if (motDePasse == motEntreParLeJoueur){
    if (age >=18 && aUnBadgeMagique && niveauDeForce >=8){
        alert ("bienvenue")
    } else {
        alert ("acces refusé")
    }

} else {
    alert ("mot de passe eronné")
}
}




function exob() {
let nomchat = prompt ("nom du chat");
let age =prompt ("age");
let poids =prompt ("poids");

if (!nomchat || nomchat.trim() === "") {
    alert('erreur');
} else {
    if (age >=15 || poids >= 10){
        alert("membre légendaire");
    }
    
       else if (age >=10 && poids >=6 ){
            alert("Membre d'honneur");
        } 
    
            else if (age >=3 && poids >=3 ){
                alert("Membre Approuvé")
                } else {
                    alert("refusé");
                }
            
    
    }
}
exob();


 