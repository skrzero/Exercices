<?php
for ($i = 0;$i<=10;$i++){
    if($i %2 == 0){
        // echo $i;
        echo "$i le nombre est pair <br/>";
    }
};
$produit1 = [
    'nom' => 'Pommes',
    'prix' => 1.20,
    'quantite' => 10
];
$produit2 = [
    'nom' => 'Bananes',
    'prix' => 0.80,
    'quantite' => 5
];
$produit3 = [
    'nom' => 'Cerises',
    'prix' => 2.50,
    'quantite' => 20
];
$panier = [
    $produit1,
    $produit2,
    $produit3
];
function calculerTotalPanier($panier) {
    $total = 0;
    foreach ($panier as $produit) {
        $total += $produit['prix'] * $produit['quantite'];
    }
    return $total;
}
calculerTotalPanier($panier);
echo calculerTotalPanier($panier);



?>