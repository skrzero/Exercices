<?php
$codepostal = 40000;
while($codepostal<40010){
    $codepostal++;
    echo $codepostal."<br>";
}

for ($i = 1; $i <= 10; $i++) {
    echo "5 x $i = " . (5 * $i) ."<br>";
}

$prenoms = ['Nuno', 'Angélique', 'Sébastien', 'Nina', 'Adrien'];
foreach ($prenoms as $list){
    echo $list."<br>";
}
$equipe = [
   'Nuno' => 'PHP',
   'Angélique' => 'JavaScript',
   'Sébastien' => 'PHP',
   'Nina' => 'Python',
   'Adrien' => 'PHP',
   'Alvyn' => 'PHP',
   'Ilona' => 'JavaScript',
   'Jean-François' => 'PHP',
   'Alan' => 'JavaScript',
   'Guillaume' => 'PHP'
];
foreach($equipe as $nom => $specialite){
    if($specialite === 'PHP'){
        echo "$nom.est développeur.$specialite.<br>";
    }
}

$tableau = array(
    "France : Paris",
    "Allemagne : Berlin",
    "Italie : Rome",
);
foreach($tableau as $value){
    echo $value."<br>";
}

$randomNumber =[];
$tab1 =[];
$tab2 =[];

for($i = 0 ; $i < 10 ;$i++){
    $randomNumber[] = rand(0,100);
}
foreach ($randomNumber as $index => $number){
    
    if ($number<50){
        $tab1[] = $number;
    } else if ($number>50){
        $tab2[] = $number;
    }
}
echo "<strong>Nombre générés :</strong><br>";
print_r ($randomNumber);
echo "<br><br><strong>Nombres < 50 :</strong><br>";
print_r($tab1);

echo "<br><br><strong>Nombres > 50 :</strong><br>";
print_r($tab2);
echo "<br>";
$pays_population = array(
  'France' => 67595000,
  'Suede' => 9998000,
  'Suisse' => 8417000,
  'Kosovo' => 1820631,
  'Malte' => 434403,
  'Mexique' => 122273500,
  'Allemagne' => 82800000,
);
echo count($pays_population);








?>