// destructuration tableau
const fruits = ['pomme','banane','kiwi'];

const [f1,f2] = fruits;
// const [, , f3] = fruits
console.log(f1); /* pomme*/
console.log(f2); /* banane*/
console.log(f3); /*kiwi*/

// import export
export const pi = 3.14;
export function addition(a,b){
    return a + b;
};

import { pi , addition } from './js/exempleBend.js';
console.log(addition(2,3));

// html et les modules
<script type='module' src='main.js'></script>



