// number converti les chaine de caractere "" en chiffre sinon sa affiche NaN
function revelerAnimal(magie){
    let user =Number(prompt("choisir un chiffre entre 1 et 5"));
        if (user >= 1 && user <= 5){
            let animaux=["licorne","grenouille","dragon","hibou","escargot"];
            return animaux[user -1];
        } else {
            return "Tu es trop puissant pour être classé dans notre bestiaire !";
        }

}
console.log(revelerAnimal());