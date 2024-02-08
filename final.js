function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Input should be positive integer number!";
  }
  const ticketPrice = 120;
  const daroanCost = 500;
  const stuffCost = 8 * 50;
  const totalCost = daroanCost + stuffCost;
  let totalTicketSale = ticketSale * ticketPrice;
  let totalSavings = totalTicketSale - totalCost;
  return totalSavings;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const lastChar = name[name.length - 1].toLowerCase();
  const goodChar = ["a", "e", "i", "o", "o", "y", "w"];
  if (goodChar.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Input should be an array!";
  }
  let newArray = [];
  for (const element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    obj.birthYear.toString().length !== 4 ||
    !obj.siteName
  ) {
    return "invalid";
  }
  let newPassword = "";
  for (let key in obj) {
    if (key === "siteName") {
      let site = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
      newPassword = site + "#" + obj["name"] + "@" + obj["birthYear"];
    }
  }
  return newPassword;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let monthlyIncome = 0;
  let taxAfterCost = 0;
  let totalMonthlyIncome = 0;
  let totalMonthlySavings = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 3000) {
      monthlyIncome += element;
    } else {
      taxAfterCost = element - (element * 20) / 100;
    }
  }
  totalMonthlyIncome = monthlyIncome + taxAfterCost;
  totalMonthlySavings = totalMonthlyIncome - livingCost;
  if (totalMonthlySavings < 0) {
    return "earn more";
  }
  return totalMonthlySavings;
}
