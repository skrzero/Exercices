// number converti les chaine de caractere "" en chiffre sinon sa affiche NaN
function revelerAnimal(magie){
    // let user =Number(prompt("choisir un chiffre entre 1 et 5"));
        if (magie >= 1 && magie <= 5){
            const animaux=["licorne","grenouille","dragon","hibou","escargot"];
            return animaux[magie -1];
        } else {
            return "Tu es trop puissant pour être classé dans notre bestiaire !";
        }

}
console.log(revelerAnimal(Number(prompt("choisir un chiffre entre 1 et 5"))));