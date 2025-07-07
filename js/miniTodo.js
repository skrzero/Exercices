let taches = [];
console.log(taches);

function ajouterTache(titre){
    let tache = {
        titre: titre,
        terminee: false,
    };   
console.table(tache);
taches.push(tache)
}
ajouterTache('acheter du pain');
ajouterTache('faire les courses');
console.table(taches);

function supprimerTache(index){
taches.splice(index);
}
supprimerTache(1)
console.table(taches)

function terminerTache(statut){
if (taches[statut]){
    taches[statut].terminee =true;
    console.log('tache terminé',taches[statut])
} else {
    console.log('tache en cours')
}
};
terminerTache(0)

function afficherTache(){
    taches.forEach((tache,index)=> {
        if (tache.terminee == true){
            console.log('[x] ' + tache.titre);
        } else {
            console.log('[ ] ' + tache.titre)
        }
    })
};
afficherTache(0)

function editerTache(index,titre){
taches.splice(index,titre);
console.table(taches.titre = titre)
};
editerTache(0,'tache a faire');


const person = {
name : 'Alice',
age : 30, 
address: {
city: "Paris",
zip:"75015"
}
};

// shallow copie
const copyperson= {...person};
console.table(copyperson);
copyperson.city = 'dax';
console.table(copyperson);
console.log(person.city);

// deep copy
const allperson = JSON.parse(JSON.stringify(person));
console.table(allperson);
allperson.address.city ='bayonne';
console.log(allperson);





