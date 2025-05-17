for (let i = 1; i < 11; i++) {
    // console.log('5');
}
// dans la boucle for let i = au nombre de repetition en ligne (vertical)
for(let i =1; i < 11; i++){
    // console.log(i );
}

for (let i= 1; i < 21; i++){
    if (i % 2==0){
    // console.log(i);
    }
}
for (let i =1; i <=10; i++){
    // console.log("3 X",i,"=",i*3);
    
}

function numb (){
    let number = Number(prompt("donner un nombre"));
    if ((number) % 2==0){
        alert("pair");
    } else {
        alert("impair");
    }
    
}
// numb()

//  exo 2
let numbPair=0;

while (numbPair < 21) {

    if (numbPair % 2==0){
        // console.log(numbPair + " est pair");
    } else {       
    }

    numbPair++   
}

function multi(){
    // let nombreX = parseInt(prompt("donner un nombre"));
    for (let i = 1; i <11; i++){
        // console.log(i+" x "+nombreX+" = "+i*nombreX);
    }
}
multi();
// let variable =parseInt(prompt("donner un nombre"));
for (let i= 1; i <21; i++){
    // console.log(i);
    if (i % 3 ===0 && i % 5===0) {
        // console.log(i+ ' fizzbuzz');       
    } else if (i % 3===0){
    // console.log(i +' fizz');
} else if (i % 5 ===0) {
//  console.log(i+ 'buzz');  
    
} else{
    // console.log(i);
}    
}

function voyelle (){
    let text = "Bonjour tout le monde";
    let voyelles ="aeiouyAEIOUY";
    let result ="";
    for (let i = 0; i <text.length; i++){
        let mot = text[i];
        if (mot === " "){
            continue;
        }
        if (voyelles.includes(mot)){
            // console.log(mot +" = voyelle");
            result += mot
        } else {
            // console.log(mot +" = consonne")
        }
    }   
}
// voyelle();


function pyramid (){
    // let numbStar =parseInt(prompt("nombre d'etoiles"));
    
    for (let i =1; i<=numbStar;i ++){
        let spaces =" ".repeat(numbStar -i);
        let star ="#".repeat(i*2-1);
 // multipli le chifre * par  2 -1 exemple 1*2=2  2-1=1 / 2*2 =4 -1 =3 du coup sa creer des chiffre impairs ce que l'on veut dans ce cas la 
        // console.log(spaces+star);
    }
}
// pyramid();

function numberRandom (){
    for (let i = 0; i <1; i++){
        let randomizer = Math.floor(Math.random()* 100 +1);
        console.log(randomizer);

        let numbUser= -1;
       while(numbUser!= randomizer){
        numbUser = parseInt(prompt("donner un nombre"));
        if (numbUser === randomizer){
            alert("bien jouer");
        } else {
            alert("perdu recommence");
        }
    }
    }
}       
numberRandom()