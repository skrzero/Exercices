function saluer(){
    console.log("bonjour tout le monde");
};

function executerFonction(fonctionVar){
console.log("test fonction");
fonctionVar();
} 
executerFonction(saluer);

// exo 2

function direBonjour(nom){
console.log("bonjour " + nom);
}
direBonjour("pierre");

function direAurevoir(nom){
console.log("au revoir " + nom );
} 
direAurevoir("tom");

function accueillir(nom, action){
action(nom);
}
accueillir("sylvain", direBonjour)

// exo 3
// function poserQuestion(question, ouiCallback, nonCallback){
//     // if(confirm(question)=== true){
//         console.log(ouiCallback);
//     } else {
//         console.log(nonCallback);
//     }   
// }
// poserQuestion("veut tu apprendre le javascript","super choix","dommage");

// exo 4
// function animerMots(mots,callback){
//     let index = 0;
//     mots = mots.split("");

//     let interval = setInterval(function(){
//         if(index < mots.length){
//             callback(mots[index]); 
//             index++;
//         } else {
//             clearInterval(interval); 
//             callback()
//         }
//     }, 1000);
// }
// animerMots("fonctionne",callback(mots[index]))

let saladeFruits = ["pomme","fraise","banane","poire"];

function animerMots (fruit, callback){
  let index = 0;
  let interval = setInterval(function(){
      console.log(fruit[index]);
      index++;
  if(index === fruit.length ){
    clearInterval(interval)
    callback();
  }
  },1000);
 
}
animerMots(saladeFruits,direBonjour)