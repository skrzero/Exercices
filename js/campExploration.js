function ajouterObjet(){
    const select = document.getElementById("objetSelect");
    const item = select.value;
        console.log(item);
    const sac = document.getElementById("sac");
    const camp= document.getElementById("camp");
    const itemSelect = document.createElement("div");
    const paragraphe = document.createElement("span");
    paragraphe.textContent= item;    
    itemSelect.appendChild(paragraphe);
    // paragraphe dans la div 
    sac.appendChild(itemSelect);
    const boutonSup = document.createElement("button");
    boutonSup.textContent = "Supprimer";
    itemSelect.appendChild(boutonSup);
    console.log(boutonSup);
    const boutonMove =document.createElement("button");
    boutonMove.textContent = "Déplacer";
    itemSelect.appendChild(boutonMove);
    boutonSup.style.marginLeft= "10px";
    boutonSup.onclick = function(){
        // sac.removeChild(itemSelect);
        itemSelect.remove();
        console.log("supp");
    };
    // boutonMove.onclick = (event)=>{
    //   console.log(event)
    //   }

    boutonMove.onclick = function(){
        const parentId= itemSelect.parentElement.id;
        if (parentId==="sac"){
          camp.appendChild(itemSelect);
        } else {
          sac.appendChild(itemSelect);  
        } 
        
        console.log("cpt");
    }
}