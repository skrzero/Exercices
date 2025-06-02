function summarizeExpenses(transactions) {
  const summary = {};

  for (let i = 0; i < transactions.length; i++) {
    let transac = transactions[i];
    if (transac.amount < 0) {
      if (!summary[transac.category]) {
        summary[transac.category] = 0;
      }
      summary[transac.category] += transac.amount;
    }
  }

  return summary;
}

const data = [
  { label: 'Supermarché', amount: -50, category: 'Alimentation' },
  { label: 'Café', amount: -4.5, category: 'Alimentation' },
  { label: 'Salaire', amount: 1500, category: 'Revenus' },
  { label: 'Abonnement Netflix', amount: -12, category: 'Divertissement' },
];

console.log(summarizeExpenses(data));