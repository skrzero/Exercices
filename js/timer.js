const startVal = document.getElementById("demarrer");
const stopVal = document.getElementById("pause");
const resetVal = document.getElementById("reset");
const displayVal = document.getElementById("affichage");
let time = 0;
let interval = null;


function chrono(){
    startVal.addEventListener("click", function(){
       interval = setInterval(function(){            
            time++;
            console.log(time);  

            if (time >= 60) {
                clearInterval(seconde); 
                console.log("stop");
            }
        }, 1000);
    });
    stopVal.addEventListener("click",function(){
        if(interval){
            clearInterval(interval)
            console.log(interval)
        }
    })
}
chrono();

    

