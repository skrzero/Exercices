// Fonction à compléter
function groupProductsByCategory(products) {
  const groupCat = {};
  for (const product of products) {
    const cat = product.category;
    console.log(cat);
    if (!groupCat[cat]) {
      groupCat[cat] = [];
    }
    groupCat[cat].push(product);
  }
   return groupCat;
}

const stock = [
  { name: "Stylo", price: 1.5, category: "Fournitures" },
  { name: "Cahier", price: 3, category: "Fournitures" },
  { name: "Clé USB", price: 10, category: "Électronique" },
  { name: "Chargeur", price: 15, category: "Électronique" },
];

console.log(groupProductsByCategory(stock));
