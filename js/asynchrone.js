setTimeout(function () {
//   console.log("3 secondes se sont écoulées !");
}, 3000);

// exo 2
console.log("Début du script")
setTimeout(function(){
    // console.log("message1")
}, 1000)
setTimeout(function(){
    // console.log("message2")
}, 3000)

// exo 3
document.getElementById("btnCharger").addEventListener("click", function(){
    document.getElementById("status").textContent = "chargement en cours"
    setTimeout (function(){
        document.getElementById("status").textContent = "chargement terminé"
    }, 2000)
})

// exo 4

function demarrerChrono(){
    let count = document.getElementById("resultatChrono")
    let start = 0;
    let chrono = setInterval(function () {
        count.textContent = start;
        start++;

        if (start >= 60) {
            clearInterval(chrono);
        }
    }, 1000); 
    
}

