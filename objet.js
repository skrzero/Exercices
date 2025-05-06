let objet ={
    prenom : "lucien",
    age : 32,
    ville: "dax"
};
console.log(objet);

objet.ville = "mdm";
objet.age =33;
console.log(objet);

objet.etudiant= true,false;
console.log(objet);

function infos(prenom,age,ville){
console.log("je m'appelle "+ objet.prenom+" ,j'ai "+objet.age+" et j'habite a "+ objet.ville);
}
infos()

let user =[
    {nom :"lucien",age:33,ville:"mdm"},
    {nom :"tom",age:23,ville:"dax"},
    {nom :"remy",age:45,ville:"heugas"},
]

for (let i =0;i<user.length;i++)
    console.log("nom trouver " + user[i].nom);

let bibliotheque=[
    {titre:"alpha",auteur:"beta",anneePublication:2020,disponible:true },
    {titre:"charlie",auteur:"delta",anneePublication:2024,disponible:false},
    {titre:"echo",auteur:"foxtrot",anneePublication:2025,disponible:true},
]
function emprunterLivre(titre){
    for (let i = 0; i < bibliotheque.length; i++){
        if (bibliotheque[i].titre === titre){
            if (bibliotheque[i].disponible===true){
                console.log("livre emprunté avec succés");
                bibliotheque[i].disponible=false;
            } else {
                console.log("ce livre n'est pas disponible");
            }
            return;
        }
    }
}
emprunterLivre("alpha")

function rendreLivre(titre){
for (let i = 0; i < bibliotheque.length; i++){
    if (bibliotheque[i].titre === titre){
        if (bibliotheque[i].disponible===false){
            bibliotheque[i].disponible = true;
            console.log("Merci pour le retour du livre");
            
        } else  {
            console.log("aurevoir");
        }
        return;
    }
}
}
rendreLivre("alpha")

