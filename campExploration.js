function ajouterObjet(){
    const select = document.getElementById("objetSelect");
    const item = select.value;
        console .log(item);
    const sac = document.getElementById("sac");
    const itemSelect = document.createElement("div");
    const paragraphe = document.createElement("p");
    paragraphe.textContent= item;    
    itemSelect.appendChild(paragraphe);
    sac.appendChild(itemSelect);
    const boutonSup = document.createElement("button");
    boutonSup.textContent = "supprimer";
    sac.appendChild(boutonSup);
    console.log(boutonSup);   
}