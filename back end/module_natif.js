const fs = require('fs')
const readline = require('readline');
const path = require('path');

let pathchemin = path.join(__dirname,'journal.txt'); /* creer une variable contenant le chemin de jounal.txt*/
console.log(chemin);

fs.writeFileSync(chemin_du_fichier,data);/* remplace la donnes du fichier*/
fs.appendFile(chemin,answer); /* ajoute de la donnée au fichier */

// *File System*

// lecture d'un fichier
fs.readFile('texte.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu du fichier :', data);
});

// ecrire dans un fichier 
fs.writeFile('nouveau.txt', 'Hello Node.js !', (err) => {
  if (err) throw err;
  console.log('Fichier créé avec succès !');
});

// ajouter du texte a un fichier 
fs.appendFile('journal.txt', 'Nouvelle ligne\n', (err) => {
  if (err) throw err;
  console.log('Ligne ajoutée.');
});

// supprimer un fichier
fs.unlink('ancien.txt', (err) => {
  if (err) throw err;
  console.log('Fichier supprimé.');
});

// path
// joindre un chemin
const filePaths = path.join(__dirname, 'dossier', 'fichier.txt');
console.log(filePath);

// obtenir le nom d'un fichier 
const nom = path.basename('/home/user/test.txt');
console.log(nom); // test.txt

// resoudre un chemin absolu (tout le chemin d'acces c:/user/etc..)
const absolute = path.resolve('dossier', 'test.txt');
console.log(absolute);

// exemple
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'notes.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenu :', data);
});

// autre exemple
let chemin = path.join(__dirname,'journal.txt');

function lirejournal(){
    fs.readFile(chemin, 'utf8', (err, data) => {
  if (err){
    console.error('erreur de lecture', err);
  } else {
      console.log('Contenu du fichier :', data);
  }
});
}
lirejournal();

