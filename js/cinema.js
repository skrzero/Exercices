let nomPrenom= prompt (" indiquez votre nom et prenom");
let complet= nomPrenom.split(" ");
let nom= complet[1];
let prenom= complet[0];
let longueurPrenom = prenom.length;
let majNom= nom.slice(0,2).toUpperCase();
let age= prompt (" quel est votre age ?");
if (age === null || isNaN(age)){
    alert("Âge invalide");
}
let etudiant= prompt ("Est tu etudiant ? (oui/non)").toLowerCase();
if (etudiant !== "oui" && etudiant!= "non" )
    alert ("attention valeur fausse ");

let tickets= parseInt(prompt("nombres de tickets"));
if (tickets <= 0 || isNaN (tickets)){
    alert("achete un ticket");
}
 
let reduction;
const prixBase= 12;


// la reduction en % ne fonctionne pas genre -50% = prix de base * 0.50
if (age <=12){
    reduction= prixBase * 0.50;
} else if (age >=60){
    reduction= prixBase *0.70;
} else if (etudiant === "oui"){
    reduction= prixBase * 0.80;
} else if (tickets >= 3){
    reduction= prixBase * 0.90;
}else {
    reduction= prixBase;
}
console.log("nom et prenom : " + nomPrenom);
console.log("Âge : " + age + " ans");
console.log("Étudiant : " + (etudiant ? "oui" : "non"));
console.log("Prix après reduction : " + reduction + "€");
console.log("Total pour " + tickets + " ticket(s) : " + (reduction * tickets) + "€");
console.log("longueur du prenom : " + longueurPrenom);
alert(majNom);
