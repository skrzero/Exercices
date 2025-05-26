<?php
$age = 20;
echo $age."<br>";

if($age>18){
    echo "tu es majeur"."<br>";
} else {
    echo "tu es mineur";
}
$note = 19;
echo $note."<br>";
if($note>17){
    echo "excellent";
} else if ($note>14) {
    echo "bien";
} else if ($note>10){
    echo "passable";
} else {
    echo "insuffisant";
}

$age =20;
$abonne =true;
echo $age."<br>";
if ($age>18 && $abonne === true){
    echo "acces autoriser"."<br>";
} else {
    echo "acces refuser"."<br>";
}

$budget = 1553.89;
$achats = 1554.76;
if ($achats > $budget){
    echo "transaction impossible";
} else {
    echo "achat effectuer";
}



?>