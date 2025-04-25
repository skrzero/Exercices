// exo 1
function capitalizeFirstLetter (msg){
    let result = msg.charAt(0).toUpperCase();
    result = result + msg.slice(1);
    return result;
}

let message ='hello0';
let message2= "bye";



console.log(capitalizeFirstLetter(message2));
console.log(capitalizeFirstLetter(message));
console.log(capitalizeFirstLetter("bonjour"));



// exo 2
function countOccurrences (count,mot){
    let parties =count.split(mot);
    let occurrences = parties.length -1;
    return occurrences;

}
let hello =countOccurrences("hello hello hello hello","hello") ;
console.log(hello);




// exo 3
function truncateString (mot,maxLenght){
if (mot.length > maxLenght){
    let motSplit = mot.slice(0,maxLenght);
    return motSplit + "...";
} else {
    return mot;
}

}
let texte ="hello,world!";
let longueur= 8;
console.log(truncateString(texte,longueur));
console.log(truncateString("testdecomprehension",longueur));




// exo 4
function countWords(phrase,mot){
    let regex = new RegExp(mot, "gi");
    let resultat = phrase.match(regex);
    if  (resultat=== null){
        return 0;
    } else {
        return resultat.length;
    }
}
let phrase ="hello hello hello hello";
let mot = "hello";
console.log(countWords(phrase,mot));


// exo 5
function sliceWord (phrasejs){
    let phraseDecoupe=phrasejs.slice(0,10);
    return phraseDecoupe;
}
let phrasejs ="javascript est super";
console.log(sliceWord(phrasejs));



// exo 6
let phraseCount = "Je suis développeur web" ;
console.log (phraseCount.length);



// exo 7
let hello2 = "   bonjour le monde!   ";
console.log(hello2.trim());