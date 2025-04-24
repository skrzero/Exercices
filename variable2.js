function capitalizeFirstLetter (msg){
    let result = msg.charAt(0).toUpperCase();
    result = result + msg.slice(1);
    return result;
}

let message ='hello';
let message2= "bye";



console.log(capitalizeFirstLetter(message2));
console.log(capitalizeFirstLetter(message));
console.log(capitalizeFirstLetter("bonjour"));
