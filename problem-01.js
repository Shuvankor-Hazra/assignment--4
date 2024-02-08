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
const result = calculateMoney(-130);
console.log(result);
