<?php
// tableau php
$animaux = array('Chien', 'Chat', 'Lapin');
echo $animaux[0].'<br />';
echo $animaux[1].'<br />';
echo $animaux[2].'<br />';
// boucle for
for($i = 1; $i <= 5; $i++) {
   echo 'Numéro : '.$i.'<br />';
}

// boucle foreach
$couleurs = array('Rouge', 'Vert', 'Bleu');
foreach($couleurs as $couleur) {
   echo 'La couleur est : '.$couleur.'<br />';
}

// do while
$compteur = 10;
do {
   echo 'Je suis exécuté au moins une fois !<br />';
   $compteur++;
} while($compteur < 5);

// pair impair
$nombre = 7;
if($nombre % 2 == 0) {
   echo 'C’est un nombre pair';
} else {
   echo 'C’est un nombre impair';
}

// if else
$meteo = 'pluie';
if($meteo == 'soleil') {
   echo 'Sors les lunettes';
} else {
   echo 'Prends un parapluie';
}
?>