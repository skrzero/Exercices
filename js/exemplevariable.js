// function + 'nom'+ argument
function capitalizeFirstLetter(txt){
    txt += "!";
    // retour a la position appeler
    return txt;
}
// valeur initial
const messageA = "salut bro";

// variable finale 
let messageFinale;

// messageFinale = txt + !  messageA=txt   donc txt +! = messagefinale
messageFinale = capitalizeFirstLetter(messageA);

console.log(messageFinale);

