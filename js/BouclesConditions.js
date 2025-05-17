// const { createElement } = require("react");

function message() {
  // alert("Bravo, tu as cliqué !");
}
function colorTextP() {
  let Test = document.getElementById("colorP");
  Test.style.color = "red";
}

let scaleBtn = document.getElementById("message2");
scaleBtn.addEventListener("mouseover", function () {
  scaleBtn.style.transform = "scale(1.2)";
});
scaleBtn.addEventListener("mouseout", function () {
    scaleBtn.style.transform = "scale(1.0)";
});

let likeCpt = document.getElementById("like");
let likeClick = 0;

function likeCount(){
    likeClick++;
    document.getElementById("resultat").textContent= likeClick;
    console.log(likeClick);
    if (likeClick === 3){
        likeCpt.disabled= true;
    }

}

function boutonDeGege(){
    let DeparDeux= document.createElement("p");
    DeparDeux.textContent="coupable";
    let Tribunal = document.getElementById("tribunalDeGege");
    Tribunal.appendChild(DeparDeux);
}
function prison(){
    let cellule = document.getElementById("boite");
    cellule.remove();
}

let titres =document.getElementsByTagName("h2");
let liste = document.createElement("ul");
let sommaire = document.getElementById("sommaire");
sommaire.appendChild(liste);

Array.from(titres).forEach(titre => {
    let element = document.createElement("li");
    element.textContent= titre.textContent;
    liste.appendChild(element);
    
    
});