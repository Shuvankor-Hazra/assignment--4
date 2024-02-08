function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let monthlyIncome = 0;
  for (const element of arr) {
    if (element >= 3000) {
      const taxAfterCost = element - (element * 20) / 100;
      monthlyIncome = taxAfterCost + monthlyIncome;
    } else {
      monthlyIncome = monthlyIncome + element;
    }
  }
  const totalMonthlySavings = monthlyIncome - livingCost;
  if (totalMonthlySavings < 0) {
    return "earn more";
  }
  return totalMonthlySavings;
}
const result = monthlySavings([1000, 2000, 3000], 5400);
// const result =  monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
// const result =  monthlySavings([ 900 , 2700 , 3400] , 10000);
// const result =  monthlySavings(100, [ 900 , 2700 , 3400]);
console.log(result);
