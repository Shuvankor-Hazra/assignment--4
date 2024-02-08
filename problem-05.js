function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input";
    }
    let monthlyIncome = 0;
    let taxAfterCost = 0;
    let totalMonthlyIncome = 0;
    let totalMonthlySavings = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element < 3000){
            monthlyIncome += element;
        } else {
            taxAfterCost = element - (element * 20 / 100); 
        }
    }
    totalMonthlyIncome = monthlyIncome + taxAfterCost;
    totalMonthlySavings = totalMonthlyIncome - livingCost;
    if(totalMonthlySavings < 0){
        return "earn more";
    }
    return totalMonthlySavings;
    }
    const result =  monthlySavings([1000, 2000, 3000], 5400);
    // const result =  monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
    // const result =  monthlySavings([ 900 , 2700 , 3400] , 10000);
    // const result =  monthlySavings(100, [ 900 , 2700 , 3400]);
    console.log(result);