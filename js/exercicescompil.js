let prenom = 'pierre';
// let age = 32;
// console.log('bonjour,je m\'appelle '+ prenom + ' et j\'ai '+ age + ' ans');

// exo 2
const ville = 'Dax';
// console.log(ville='stpaul'); la constante ne peut pas etre modifier 

// exo 3
let age = 32;
if(age<18){
    console.log('mineur');
} else if (age>=18,age<=50){
    console.log('majeur');
} else if (age>50){
    console.log('senior');
};

// exo4
// let nombre = parseInt(prompt('donner un chiffre entre 1 et 10'));
// if(nombre % 2 == 0 && nombre % 3 == 0){
//     console.log('les deux');
// } else if (nombre % 3 == 0){
//     console.log('divisible par 3');
// } else if(nombre % 2 == 0){
//     console.log('divisible par 2');
// } else {
//     console.log('ne peut etre diviser');
// };

// exo 5
const mois = 'juillet';
switch (mois){
case "janvier":
    console.log('hiver');
    break;
case "juillet":
    console.log('ete');
    break;
case "octobre":
    console.log('autonne');
    break;
};
// exo 6
for(let i = 0; i<=20;i++){
    if(i %3 ==0){
        continue;
    } else {
        console.log(i);
    }
};
console.log('suite');
// exo 7
let somme =0;
for(let i = 0 ; i<=100;i+=2){
    somme +=i
};
console.log(somme)

// exo 8
// let numb = 0;
// while(numb<=1000){
//     console.log(numb**2);
// numb++;
// }






