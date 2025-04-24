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


function countOccurrences (count,mot){
    let parties =count.split(mot);
    let occurrences = parties.length -1;
    return occurrences;

}
let hello =countOccurrences("hello hello hello hello","hello") ;
console.log(hello);




