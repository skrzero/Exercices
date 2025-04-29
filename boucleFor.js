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
    for (let i = 1; i <11; i++){
        console.log(i, i*7);
    }
}
multi();